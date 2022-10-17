CREATE DATABASE airbooking

GO

USE airbooking

GO

CREATE TABLE [Categories]
(
 [category]    varchar(50) NOT NULL ,
 [price]       money NOT NULL ,
 [total_seats] int NOT NULL ,


 CONSTRAINT [PK_category] PRIMARY KEY CLUSTERED ([category] ASC)
);
GO

CREATE TABLE [Customers]
(
 [profile_id]    varchar(50)  NOT NULL ,
 [customer_name] varchar(50) NOT NULL ,
 [address]       varchar(50) NOT NULL ,
 [tel_no]        varchar(50) NOT NULL ,
 [email]         varchar(50) NOT NULL ,
 [created_time]  datetime NOT NULL DEFAULT GETDATE(),
 


 CONSTRAINT [PK_profile_id] PRIMARY KEY CLUSTERED ([profile_id] ASC)
);

GO

CREATE TABLE [Seats]
(
 [seat_id]   varchar(50) NOT NULL ,
 [status]    bit NOT NULL ,
 [category]  varchar(50) NOT NULL ,


 CONSTRAINT [PK_seat_id] PRIMARY KEY CLUSTERED ([seat_id] ASC),
 CONSTRAINT [FK_category] FOREIGN KEY ([category])  REFERENCES [Categories]([category]),
);
GO


CREATE NONCLUSTERED INDEX [FK_category] ON [Seats] 
 (
  [category] ASC
 )

GO

CREATE TABLE [Tickets_info]
(
 [ticket_id]       int IDENTITY(1,1) NOT NULL ,
 [profile_id]      varchar(50) NOT NULL ,
 [seat_id]         varchar(50) NOT NULL ,
 [created_time]    datetime NOT NULL DEFAULT GETDATE(),


 CONSTRAINT [PK_ticket_id] PRIMARY KEY CLUSTERED ([ticket_id] ASC),
 CONSTRAINT [FK_profile_id] FOREIGN KEY ([profile_id])  REFERENCES [Customers]([profile_id]),
 CONSTRAINT [FK_seat_id] FOREIGN KEY ([seat_id])  REFERENCES [Seats]([seat_id])
);
GO


CREATE NONCLUSTERED INDEX [FK_profile_id] ON [Tickets_info] 
 (
  [profile_id] ASC
 )

GO

CREATE NONCLUSTERED INDEX [FK_seat_id] ON [Tickets_info] 
 (
  [seat_id] ASC
 )

GO

INSERT into Categories VALUES
('Executive', 100, 8),
('Economy', 50, 42)

INSERT into Seats VALUES
('A1', 1 , 'Executive'),
('A2', 1 , 'Executive'),
('A3', 1 , 'Executive'),
('A4', 1 , 'Executive'),
('A5', 1 , 'Executive'),
('A6', 1 , 'Executive'),
('A7', 1 , 'Executive'),
('A8', 1 , 'Executive'),
('B1', 1 , 'Economy'),
('B2', 1 , 'Economy'),
('B3', 1 , 'Economy'),
('B4', 1 , 'Economy'),
('B5', 1 , 'Economy'),
('B6', 1 , 'Economy')

SELECT* FROM Categories
SELECT * FROM Seats
