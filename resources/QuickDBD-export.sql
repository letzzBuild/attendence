-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE `teachers` (
    `faculty_id` string  NOT NULL ,
    `Name` string  NOT NULL ,
    `phone` string  NOT NULL ,
    `email` string  NULL ,
    PRIMARY KEY (
        `faculty_id`
    )
);

CREATE TABLE `subjects` (
    `subject_code` string  NOT NULL ,
    `subject_name` string  NOT NULL ,
    PRIMARY KEY (
        `subject_code`
    )
);

CREATE TABLE `branches` (
    `branch_id` string  NOT NULL ,
    `branch_name` string  NOT NULL ,
    `hod_id` string  NOT NULL ,
    PRIMARY KEY (
        `branch_id`
    )
);

CREATE TABLE `users` (
    `username` string  NOT NULL ,
    `password` string  NOT NULL ,
    `role` string  NOT NULL 
);

CREATE TABLE `divisions` (
    `div_name` string  NOT NULL ,
    `div_code` string  NOT NULL ,
    `branch_id` string  NOT NULL ,
    `sem` string  NOT NULL ,
    PRIMARY KEY (
        `div_code`
    )
);

CREATE TABLE `mentors` (
    `name` string  NOT NULL ,
    `mentor_id` string  NOT NULL ,
    `email` string  NOT NULL ,
    `phone` string  NOT NULL 
);

CREATE TABLE `students` (
    `name` string  NOT NULL ,
    `usn` string  NOT NULL ,
    `sem` string  NOT NULL ,
    `branch_id` string  NOT NULL ,
    `div_id` string  NOT NULL ,
    `mobile` string  NOT NULL ,
    `email` string  NOT NULL ,
    `mentor_id` string  NOT NULL ,
    PRIMARY KEY (
        `usn`
    )
);

CREATE TABLE `subjects_taken` (
    `subject_code` string  NOT NULL ,
    `faculty_id` string  NOT NULL ,
    `sem` string  NOT NULL ,
    `branch_id` string  NOT NULL 
);

CREATE TABLE `attendence` (
    `usn` string  NOT NULL ,
    `sem` string  NOT NULL ,
    `div_id` string  NOT NULL ,
    `branch_id` string  NOT NULL ,
    `faculty_id` string  NOT NULL ,
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

