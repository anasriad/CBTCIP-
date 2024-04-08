export interface SessionCredential {
    email: string,
    password: string
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
    associaltionId: string,
    Id: string,
    Events: Event[]

}

export interface ChildrenNode {
    children: React.ReactNode
}