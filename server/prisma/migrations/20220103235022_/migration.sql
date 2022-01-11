-- CreateTable
CREATE TABLE "Eletro" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "storyline" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Eletro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EletroToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EletroToUser_AB_unique" ON "_EletroToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_EletroToUser_B_index" ON "_EletroToUser"("B");

-- AddForeignKey
ALTER TABLE "_EletroToUser" ADD FOREIGN KEY ("A") REFERENCES "Eletro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EletroToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
