-- CreateTable
CREATE TABLE "Event" (
    "Id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "associationId" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "StartsAt" TIMESTAMP(3) NOT NULL,
    "EndsAt" TIMESTAMP(3) NOT NULL,
    "AddedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL,
    "Role" TEXT NOT NULL,
    "associationId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Association" (
    "Id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Association_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Id_key" ON "User"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Association_Id_key" ON "Association"("Id");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_associationId_fkey" FOREIGN KEY ("associationId") REFERENCES "Association"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_associationId_fkey" FOREIGN KEY ("associationId") REFERENCES "Association"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
