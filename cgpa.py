# !/usr/bin/python3

session = input("Enter session and semester (e.g., 2018/2019.2): ")
print(f"{session.split('.')[0]} Academic session")
semester = session.split('.')[1]
print(f"{semester}{'st' if semester == '1' else 'nd'} semester")

no_of_courses = int(input("Enter number of courses: "))
print(f"You have {no_of_courses} courses")

total_units = int(input("Enter total number of units: "))
print(f"You have a total of {total_units} units")

total_credit_unit_value = 0
total_credit_unit_value_possible = total_units * 5
course_list = {}
grading = {1: 'E', 2: 'D', 3: 'C', 4: 'B', 5: 'A'}

with open('results.txt', 'a') as fh:
    fh.write(f"{session.split('.')[0]} Academic session\n")
    fh.write(f"{semester}{'st' if semester == '1' else 'nd'} semester result:\n")
    fh.write("Grade Breakdown\n")

    for x in range(1, no_of_courses + 1):
        print(f"\nCourse {x}")
        code = input("Enter course code: ")
        unit = int(input("Enter course unit in numbers: "))
        grade = int(input("Enter course grade in numbers: "))
        value = grade * unit
        highest = unit * 5
        total_credit_unit_value += value
        course_list[code] = {"grade": grading[grade],
                             "unit": unit,
                             "value": value,
                             "highest": highest,
                             "remainder": highest - value if highest - value > 0 else "None, you got full marks"}

        fh.write(f"\nCourse Code: {code}\n")
        fh.write("Unit: {}\t Grade: {}\t Value: {}\t Highest: {}\t Remainder: {}\n".format(
            unit, grading[grade], value, highest, highest - value if highest - value > 0 else "None, you got full marks"
        ))
        fh.write("-" * 100 + "\n")

    gpa = round((total_credit_unit_value / total_credit_unit_value_possible) * 5, 3)
    fh.write(f"Total Credit Unit Value Acquired: {total_credit_unit_value} \n")
    fh.write(f"Total Credit Unit Value Possible: {total_credit_unit_value_possible} which is total units({total_units}) x 5)\n")
    fh.write(f"TCUVA/TCUVP * 5 = ({total_credit_unit_value}/{total_credit_unit_value_possible}) multiplied by 5\n")
    fh.write(f"\nSemester GPA = {gpa} GPA\n")
    fh.write("-" * 100 + "\n\n")