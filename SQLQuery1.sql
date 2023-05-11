use Kurs;
create table Users
(
	id int identity(1,1) primary key,
	username nvarchar(50) not null,
	email nvarchar(100) not null,
	phone nvarchar(15) not null,
	password nvarchar(50) not null,
	role nvarchar(10)
)
create table Type
(
    id int identity(1,1) primary key,
    name nvarchar(20)
)
create table Menu
(
	id int identity(1,1) primary key,
	name nvarchar(100),
	type int constraint FK_MENU_TYPE foreign key(type) references Type(id) on delete cascade,
	image nvarchar(max),
	description nvarchar(max),
	price money not null
)
create table Cart
(
	id int identity(1,1) primary key,
	food int constraint FK_CART_MENU foreign key(food) references Menu(id) on delete cascade,
	amount int not null,
	userid int constraint FK_CART_USERS foreign key(userid) references Users(id) on delete cascade
)
create table Orders
(
	id int identity(1,1) primary key,
	amount money not null,
	payment int not null,
	paid bit default 0,
	address nvarchar(100) not null,
	status int not null,
	date datetime not null,
	userid int constraint FK_ORDERS_USERS foreign key(userid) references Users(id) on delete cascade
)
create table OrderedFood
(
	id int identity(1,1) primary key,
	food int constraint FK_ORDEREDFOOD_MENU foreign key(food) references Menu(id) on delete cascade,
	amount int not null,
	orderid int constraint FK_ORDEREDFOOD_ORDERS foreign key(orderid) references Orders(id) on delete cascade
)