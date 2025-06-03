import {Request, Response} from 'express';
import prisma from '../lib/prisma';

let groups: any[] = [];
let userId: string | null = null;

export const createGroup = async (req: Request, res: Response) => {
    const {name} = req.body;
    const user = req.user;

    if (!name|| !user?.uid) {
        return res.status(400).json({message: 'Missing required fields'});
    }
    try {
    const newGroup = await prisma.group.create({
        data: {
        name,
        ownerId: user.uid
        }
    });
    const newGroupMember = await prisma.groupMember.create ({
        data: {
            userId: user.uid,
            groupId: newGroup.id
            
        }
    })
    

    res.status(201).json(newGroup);
} catch (error) {
    console.error('Error creating group:', error);
    return res.status(500).json({message: 'Internal server error'});
}
};

export const getGroups = async (req: Request, res: Response) => {
    const user = req.user;
    if (!user?.uid) {
        return res.status(400).json({message: 'Unauthorized'});
    }
    try {
    const memberships = await prisma.groupMember.findMany({
        where: { userId: user.uid},
        include: {group: true}
    });
    groups = memberships.map(m => m.group);

    res.status(200).json(groups);

    } catch (error) {

    console.error('Error fetching groups:', error);
    return res.status(500).json({message: 'Internal server error'});

    }
};

export const joinGroup = async (req: Request, res: Response) => {
  const user = req.user;
  const groupId = parseInt(req.params.groupId);

  if (!user?.uid || isNaN(groupId)) {
    return res.status(400).json({ message: 'Invalid request' });
  }

  try {
    // Check if group exists
    const group = await prisma.group.findUnique({
      where: { id: groupId }
    });

    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    // Check if user is already a member
    const existingMember = await prisma.groupMember.findFirst({
      where: {
        userId: user.uid,
        groupId: groupId
      }
    });

    if (existingMember) {
      return res.status(409).json({ message: 'Already a group member' });
    }

    // Add the user to the group
    await prisma.groupMember.create({
      data: {
        userId: user.uid,
        groupId: groupId
      }
    });

    return res.status(200).json({ message: 'Successfully joined group' });
  } catch (error) {
    console.error('Error joining group:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const postProof = async (req: Request, res: Response) => {
  const user = req.user;
  const groupId = parseInt(req.params.groupId);
  const {message, imageUrl} = req.body;
  if( !user?.uid || isNaN(groupId) || !message) {
    return res.status(400).json({ message: 'Invalid request'});
  }
  if (!message.trim()) {
  return res.status(400).json({ message: 'Proof message cannot be empty' });
}
  try {
    const proof = await prisma.proof.create({
      data: {
        message,
        imageUrl,
        userId: user.uid,
        groupId: groupId
      }
    })
    return res.status(201).json(proof);
  } catch (error) {
    console.error('Error posting proof:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export const getProof = async (req: Request, res: Response) => {
  const groupId = parseInt(req.params.groupId);
  const user = req.user;
  if (!user?.uid || isNaN(groupId)) {
    return res.status(400).json({ message: 'Unauthorized' });
  };

  try {
    const posts = await prisma.proof.findMany({
      where: { groupId },
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            email: true
          }
        }
      }
    });

    return res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching proofs:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}