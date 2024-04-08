import prisma from "../../prisma/Initiator";

export async function GetAssociationService() {
    const associations = await prisma.association.findMany()
    return associations
}