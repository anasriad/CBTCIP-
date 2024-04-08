import { faker } from '@faker-js/faker'
import prisma from '../prisma/Initiator'
import log from './helpers/logger'

const Seeder = async () => {
    Promise.all([
        await prisma.association.deleteMany(),
        await prisma.user.deleteMany(),
        await prisma.event.deleteMany(),
    ])
    try {

        await prisma.association.createMany({
            data: Array.from({ length: 5 }, () => ({
                Id: faker.string.uuid(),
                Name: faker.company.name(),
            }))
        })
        const associations = await prisma.association.findMany()
        await prisma.user.createMany({
            data: Array.from({ length: 10 }, () => ({
                Id: faker.string.uuid(),
                FirstName: faker.person.firstName(),
                LastName: faker.person.lastName(),
                Email: faker.internet.email(),
                Password: faker.internet.password(),
                PhoneNumber: faker.phone.number(),
                Role: faker.helpers.arrayElement(['Board', 'Member']),
                associationId: faker.helpers.arrayElement(associations).Id

            }))
        })
        const users = await prisma.user.findMany()
        await prisma.event.createMany({
            data: Array.from({ length: 20 }, () => ({
                Id: faker.string.uuid(),
                Name: faker.internet.displayName(),
                Description: faker.lorem.paragraphs(2),
                StartsAt: faker.date.soon({ days: 10 }),
                EndsAt: faker.date.soon({ days: 20 }),
                userId: faker.helpers.arrayElement(users).Id,
                associationId: faker.helpers.arrayElement(associations).Id
            })),
        })
        log.info('Data Has Been Seeded Successfully')
    } catch (error) {
        log.error(`Cannot Seed Data Due to ${error}`)
    }
}

Seeder()