CREATE TABLE `__EFMigrationsHistory` (
    `MigrationId` varchar(95) NOT NULL,
    `ProductVersion` varchar(32) NOT NULL,
    CONSTRAINT `PK___EFMigrationsHistory` PRIMARY KEY (`MigrationId`)
);

CREATE TABLE `AspNetRoles` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Name` varchar(256) NULL,
    `NormalizedName` varchar(256) NULL,
    `ConcurrencyStamp` longtext NULL,
    CONSTRAINT `PK_AspNetRoles` PRIMARY KEY (`Id`)
);

CREATE TABLE `AspNetUsers` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `UserName` varchar(256) NULL,
    `NormalizedUserName` varchar(256) NULL,
    `Email` varchar(256) NULL,
    `NormalizedEmail` varchar(256) NULL,
    `EmailConfirmed` bit NOT NULL,
    `PasswordHash` longtext NULL,
    `SecurityStamp` longtext NULL,
    `ConcurrencyStamp` longtext NULL,
    `PhoneNumber` longtext NULL,
    `PhoneNumberConfirmed` bit NOT NULL,
    `TwoFactorEnabled` bit NOT NULL,
    `LockoutEnd` datetime(6) NULL,
    `LockoutEnabled` bit NOT NULL,
    `AccessFailedCount` int NOT NULL,
    `Gender` longtext NULL,
    `DateOfBirth` datetime(6) NOT NULL,
    `KnownAs` longtext NULL,
    `Created` datetime(6) NOT NULL,
    `Introduction` longtext NULL,
    `LastActive` datetime(6) NOT NULL,
    `LookingFor` longtext NULL,
    `City` longtext NULL,
    `Country` longtext NULL,
    CONSTRAINT `PK_AspNetUsers` PRIMARY KEY (`Id`)
);

CREATE TABLE `Sessions` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `StartDate` datetime(6) NOT NULL,
    `EndDate` datetime(6) NOT NULL,
    `Name` longtext NULL,
    `CreatedBy` longtext NULL,
    `CreatedOn` datetime(6) NOT NULL,
    CONSTRAINT `PK_Sessions` PRIMARY KEY (`Id`)
);

CREATE TABLE `AspNetRoleClaims` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `RoleId` int NOT NULL,
    `ClaimType` longtext NULL,
    `ClaimValue` longtext NULL,
    CONSTRAINT `PK_AspNetRoleClaims` PRIMARY KEY (`Id`),
    CONSTRAINT `FK_AspNetRoleClaims_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `AspNetRoles` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `AspNetUserClaims` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `UserId` int NOT NULL,
    `ClaimType` longtext NULL,
    `ClaimValue` longtext NULL,
    CONSTRAINT `PK_AspNetUserClaims` PRIMARY KEY (`Id`),
    CONSTRAINT `FK_AspNetUserClaims_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `AspNetUserLogins` (
    `LoginProvider` varchar(255) NOT NULL,
    `ProviderKey` varchar(255) NOT NULL,
    `ProviderDisplayName` longtext NULL,
    `UserId` int NOT NULL,
    CONSTRAINT `PK_AspNetUserLogins` PRIMARY KEY (`LoginProvider`, `ProviderKey`),
    CONSTRAINT `FK_AspNetUserLogins_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `AspNetUserRoles` (
    `UserId` int NOT NULL,
    `RoleId` int NOT NULL,
    CONSTRAINT `PK_AspNetUserRoles` PRIMARY KEY (`UserId`, `RoleId`),
    CONSTRAINT `FK_AspNetUserRoles_AspNetRoles_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `AspNetRoles` (`Id`) ON DELETE CASCADE,
    CONSTRAINT `FK_AspNetUserRoles_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `AspNetUserTokens` (
    `UserId` int NOT NULL,
    `LoginProvider` varchar(255) NOT NULL,
    `Name` varchar(255) NOT NULL,
    `Value` longtext NULL,
    CONSTRAINT `PK_AspNetUserTokens` PRIMARY KEY (`UserId`, `LoginProvider`, `Name`),
    CONSTRAINT `FK_AspNetUserTokens_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `Assignments` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `BookAsin` longtext NULL,
    `TotalCodes` int NOT NULL,
    `AssignedDate` datetime(6) NOT NULL,
    `AssignedToId` int NOT NULL,
    `IsDeleted` bit NOT NULL,
    `CreatedBy` longtext NULL,
    `CreatedOn` datetime(6) NOT NULL,
    `LastModifiedBy` longtext NULL,
    `LastModifiedOn` datetime(6) NOT NULL,
    `Country` longtext NULL,
    `StartingRating` int NOT NULL,
    `IsCompleted` bit NOT NULL,
    CONSTRAINT `PK_Assignments` PRIMARY KEY (`Id`),
    CONSTRAINT `FK_Assignments_AspNetUsers_AssignedToId` FOREIGN KEY (`AssignedToId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `Messages` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `SenderId` int NOT NULL,
    `RecipientId` int NOT NULL,
    `Content` longtext NULL,
    `DateRead` datetime(6) NULL,
    `IsRead` bit NOT NULL,
    `MessageSent` datetime(6) NOT NULL,
    `SenderDeleted` bit NOT NULL,
    `RecipientDeleted` bit NOT NULL,
    CONSTRAINT `PK_Messages` PRIMARY KEY (`Id`),
    CONSTRAINT `FK_Messages_AspNetUsers_RecipientId` FOREIGN KEY (`RecipientId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE NO ACTION,
    CONSTRAINT `FK_Messages_AspNetUsers_SenderId` FOREIGN KEY (`SenderId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE NO ACTION
);

CREATE TABLE `Photos` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Url` longtext NULL,
    `Description` longtext NULL,
    `DateAdded` datetime(6) NOT NULL,
    `IsMain` bit NOT NULL,
    `PublicID` longtext NULL,
    `UserId` int NOT NULL,
    CONSTRAINT `PK_Photos` PRIMARY KEY (`Id`),
    CONSTRAINT `FK_Photos_AspNetUsers_UserId` FOREIGN KEY (`UserId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `Reviews` (
    `PenName` varchar(255) NOT NULL,
    `ReviewDate` datetime(6) NOT NULL,
    `BookAsin` varchar(255) NOT NULL,
    `ReviewTitle` varchar(255) NOT NULL,
    `ReviewerId` int NOT NULL,
    `Country` longtext NULL,
    CONSTRAINT `PK_Reviews` PRIMARY KEY (`PenName`, `BookAsin`, `ReviewDate`, `ReviewTitle`),
    CONSTRAINT `FK_Reviews_AspNetUsers_ReviewerId` FOREIGN KEY (`ReviewerId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `Payments` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `MemberId` int NOT NULL,
    `TotalReviews` float NOT NULL,
    `TotalAmountInTaka` float NOT NULL,
    `SessionId` int NOT NULL,
    `IsReceived` bit NOT NULL,
    `LastModifiedOn` datetime(6) NOT NULL,
    `RecieveDate` datetime(6) NOT NULL,
    CONSTRAINT `PK_Payments` PRIMARY KEY (`Id`),
    CONSTRAINT `FK_Payments_AspNetUsers_MemberId` FOREIGN KEY (`MemberId`) REFERENCES `AspNetUsers` (`Id`) ON DELETE CASCADE,
    CONSTRAINT `FK_Payments_Sessions_SessionId` FOREIGN KEY (`SessionId`) REFERENCES `Sessions` (`Id`) ON DELETE CASCADE
);

CREATE INDEX `IX_AspNetRoleClaims_RoleId` ON `AspNetRoleClaims` (`RoleId`);

CREATE UNIQUE INDEX `RoleNameIndex` ON `AspNetRoles` (`NormalizedName`);

CREATE INDEX `IX_AspNetUserClaims_UserId` ON `AspNetUserClaims` (`UserId`);

CREATE INDEX `IX_AspNetUserLogins_UserId` ON `AspNetUserLogins` (`UserId`);

CREATE INDEX `IX_AspNetUserRoles_RoleId` ON `AspNetUserRoles` (`RoleId`);

CREATE INDEX `EmailIndex` ON `AspNetUsers` (`NormalizedEmail`);

CREATE UNIQUE INDEX `UserNameIndex` ON `AspNetUsers` (`NormalizedUserName`);

CREATE INDEX `IX_Assignments_AssignedToId` ON `Assignments` (`AssignedToId`);

CREATE INDEX `IX_Messages_RecipientId` ON `Messages` (`RecipientId`);

CREATE INDEX `IX_Messages_SenderId` ON `Messages` (`SenderId`);

CREATE INDEX `IX_Payments_MemberId` ON `Payments` (`MemberId`);

CREATE INDEX `IX_Payments_SessionId` ON `Payments` (`SessionId`);

CREATE INDEX `IX_Photos_UserId` ON `Photos` (`UserId`);

CREATE INDEX `IX_Reviews_ReviewerId` ON `Reviews` (`ReviewerId`);

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20191108155134_mysqlInitial', '2.2.6-servicing-10079');

