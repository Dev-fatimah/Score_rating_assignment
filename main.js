let score = parseInt(prompt("Enter your score (0-100):"));
let grade;

switch(true) {
    case (score >= 80 && score <= 100):
        grade = 'A'
        break;

        case (score >=60  && score < 80):
            grade = 'B'
            break;

            case (score >= 50 && score < 60):
                grade = 'C'
                break;

                case (score >= 40 && score < 50):
                    grade = 'D'
                    break;

                    case (score >= 30 && score < 40):
                        grade = 'E'
                        break;

                        case (score >= 0 && score < 30):
                        grade = 'F'
                        break;

    default:
        grade = "invalid score";
        break;
}
    console.log(`You have ${grade}`);