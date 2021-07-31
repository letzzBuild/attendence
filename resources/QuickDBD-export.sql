-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE `teachers` (
    `faculty_id` varchar(50)  NOT NULL ,
    `Name` varchar(50)  NOT NULL ,
    `phone` varchar(10)  NOT NULL ,
    `email` varchar(50)  NULL ,
    PRIMARY KEY (
        `faculty_id`
    )
);

CREATE TABLE `subjects` (
    `subject_code` varchar(50)  NOT NULL ,
    `subject_name` varchar(50)  NOT NULL ,
    PRIMARY KEY (
        `subject_code`
    )
);

CREATE TABLE `branches` (
    `branch_id` varchar(50)  NOT NULL ,
    `branch_name` varchar(50)  NOT NULL ,
    `hod_id` varchar(50)  NOT NULL ,
    PRIMARY KEY (
        `branch_id`
    )
);

CREATE TABLE `users` (
    `username` varchar(50)  NOT NULL ,
    `password` varchar(50)  NOT NULL ,
    `role` varchar(50)  NOT NULL 
);

CREATE TABLE `divisions` (
    `div_name` varchar(50)  NOT NULL ,
    `div_code` varchar(50)  NOT NULL ,
    `branch_id` varchar(50)  NOT NULL ,
    `sem` varchar(50)  NOT NULL ,
    PRIMARY KEY (
        `div_code`
    )
);

CREATE TABLE `mentors` (
    `name` stvarchar(50)ring  NOT NULL ,
    `mentor_id` varchar(50)  NOT NULL ,
    `email` varchar(50)  NOT NULL ,
    `phone` varchar(50)  NOT NULL 
);

CREATE TABLE `students` (
    `name` varchar(50)  NOT NULL ,
    `usn` varchar(50)  NOT NULL ,
    `sem` varchar(50)  NOT NULL ,
    `branch_id` varchar(50)  NOT NULL ,
    `div_id` varchar(50)  NOT NULL ,
    `mobile` varchar(50)  NOT NULL ,
    `email` varchar(50)  NOT NULL ,
    `mentor_id` varchar(50)  NOT NULL ,
    PRIMARY KEY (
        `usn`
    )
);

CREATE TABLE `subjects_taken` (
    `subject_code` varchar(50)  NOT NULL ,
    `faculty_id` varchar(50)  NOT NULL ,
    `sem` varchar(50)  NOT NULL ,
    `branch_id` varchar(50)  NOT NULL 
);

CREATE TABLE `attendence` (
    `usn` varchar(50)  NOT NULL ,
    `sem` varchar(50)  NOT NULL ,
    `div_id` varchar(50)  NOT NULL ,
    `branch_id` varchar(50)  NOT NULL ,
    `faculty_id` varchar(50)  NOT NULL ,
    `timestamp` datetime  NOT NULL ,
    `status` bool  NOT NULL 
);

ALTER TABLE `branches` ADD CONSTRAINT `fk_branches_hod_id` FOREIGN KEY(`hod_id`)
REFERENCES `teachers` (`faculty_id`);

ALTER TABLE `divisions` ADD CONSTRAINT `fk_divisions_branch_id` FOREIGN KEY(`branch_id`)
REFERENCES `branches` (`branch_id`);

ALTER TABLE `mentors` ADD CONSTRAINT `fk_mentors_mentor_id` FOREIGN KEY(`mentor_id`)
REFERENCES `teachers` (`faculty_id`);

ALTER TABLE `students` ADD CONSTRAINT `fk_students_branch_id` FOREIGN KEY(`branch_id`)
REFERENCES `branches` (`branch_id`);

ALTER TABLE `students` ADD CONSTRAINT `fk_students_div_id` FOREIGN KEY(`div_id`)
REFERENCES `divisions` (`div_code`);

ALTER TABLE `students` ADD CONSTRAINT `fk_students_mentor_id` FOREIGN KEY(`mentor_id`)
REFERENCES `teachers` (`faculty_id`);

ALTER TABLE `subjects_taken` ADD CONSTRAINT `fk_subjects_taken_faculty_id` FOREIGN KEY(`faculty_id`)
REFERENCES `teachers` (`faculty_id`);

ALTER TABLE `subjects_taken` ADD CONSTRAINT `fk_subjects_taken_branch_id` FOREIGN KEY(`branch_id`)
REFERENCES `branches` (`branch_id`);

ALTER TABLE `attendence` ADD CONSTRAINT `fk_attendence_usn` FOREIGN KEY(`usn`)
REFERENCES `students` (`usn`);

ALTER TABLE `attendence` ADD CONSTRAINT `fk_attendence_div_id` FOREIGN KEY(`div_id`)
REFERENCES `divisions` (`div_code`);

ALTER TABLE `attendence` ADD CONSTRAINT `fk_attendence_branch_id` FOREIGN KEY(`branch_id`)
REFERENCES `branches` (`branch_id`);

ALTER TABLE `attendence` ADD CONSTRAINT `fk_attendence_faculty_id` FOREIGN KEY(`faculty_id`)
REFERENCES `teachers` (`faculty_id`);

