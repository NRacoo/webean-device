-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "address" VARCHAR(500) NOT NULL,
    "birth" TIMESTAMP(3),
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verifyExpiredAt" TIMESTAMP(3),
    "verifyToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "imageProfile" VARCHAR(400),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDevice" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "deviceCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserDevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detection_sessions" (
    "id" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),
    "totalBaik" INTEGER NOT NULL DEFAULT 0,
    "totalCacat" INTEGER NOT NULL DEFAULT 0,
    "monthSummaryId" TEXT,

    CONSTRAINT "Detection_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detection_records" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "baik" INTEGER NOT NULL,
    "cacat" INTEGER NOT NULL,
    "sessionId" TEXT NOT NULL,

    CONSTRAINT "Detection_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detection_monthly" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "totalBaik" INTEGER NOT NULL DEFAULT 0,
    "totalCacat" INTEGER NOT NULL DEFAULT 0,
    "totalPanen" INTEGER NOT NULL DEFAULT 0,
    "avgBaikPerSesi" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "avgCacatPerSesi" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "persenBaik" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "jumlahSesi" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Detection_monthly_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserDevice_userId_deviceCode_key" ON "UserDevice"("userId", "deviceCode");

-- CreateIndex
CREATE INDEX "Detection_sessions_startedAt_idx" ON "Detection_sessions"("startedAt");

-- CreateIndex
CREATE INDEX "Detection_sessions_monthSummaryId_idx" ON "Detection_sessions"("monthSummaryId");

-- CreateIndex
CREATE INDEX "Detection_records_sessionId_idx" ON "Detection_records"("sessionId");

-- CreateIndex
CREATE INDEX "Detection_records_timestamp_idx" ON "Detection_records"("timestamp");

-- CreateIndex
CREATE INDEX "Detection_monthly_year_idx" ON "Detection_monthly"("year");

-- CreateIndex
CREATE UNIQUE INDEX "Detection_monthly_year_month_key" ON "Detection_monthly"("year", "month");

-- AddForeignKey
ALTER TABLE "UserDevice" ADD CONSTRAINT "UserDevice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detection_sessions" ADD CONSTRAINT "Detection_sessions_monthSummaryId_fkey" FOREIGN KEY ("monthSummaryId") REFERENCES "Detection_monthly"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detection_records" ADD CONSTRAINT "Detection_records_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Detection_sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
