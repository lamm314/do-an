ALTER TABLE `orders` ADD `payment_method` VARCHAR(50)  NOT NULL  DEFAULT 'cod'  AFTER `note`;
ALTER TABLE `orders` ADD `paid` TINYINT  NOT NULL  DEFAULT 0  AFTER `payment_method`;