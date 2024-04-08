export interface SessionCredential {
    email: string,
    password: string
}
export interface SignUp{
    Email: string,
    Password: string,
    FirstName: string
    LastName: string,
    PhoneNumber: string,
    Role: string | null,
    associationId: string | null,
}
export interface Event {
    Id: string,
    Name: string,
}
export interface User {
    Email: string,
    Password: string,
    FirstName: string
    LastName: string,
    PhoneNumber: string,
    Role: string,
    associationId: string,
    Id: string,
    Events: Event[]
}
export interface EventPost {
    Id?: string,
    Name: string,
    startDate: string,
    endDate: string,
    Description: string,
    associationId?: string | undefined,
    userId?: string | undefined,
    AddedAt?: string
}

export interface ChildrenNode {
    children: React.ReactNode
}

export interface EventUpdate{
    Id: string,
    Name:string,
    startDate:string,
    endDate:string,
    Description:string
}