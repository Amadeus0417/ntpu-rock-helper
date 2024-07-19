# ntpu-rock-helper
An automated system dealing with responses from Google form to Google Spreadsheet.

# Purpose
The ntpu-rock-helper project is designed to manage and streamline the reservation process for the NTPU rock music club. It automates handling of band reservations, personal practice sessions, and reservation cancellations, ensuring adherence to club policies and efficient use of practice spaces.

# Features
1. Automated Form Response Handling:
     - Activates upon receiving a Google Form response.
3. Band Reservation Management:
     - Only allows advance reservations.  
     - Ensures the selected time interval is available.  
     - Restricts reservations on closing dates.  
5. Personal Practice Management:
     - Accepts only same-day reservations.
     - Validates time intervals for availability.
     - Ensures reservations do not extend to the next day.
7. Reservation Cancellation Management:
     - Prevents cancellation of past reservations.
     - Ensures only existing reservations can be cancelled.
5. Course and Activity Management:
     - Teachers: Select specific time intervals on designated weekdays to schedule courses for club members.
     - Managers: Add activities without any restrictions.
7. Script Status Manager:
     - File Verification: Checks daily to ensure that all necessary spreadsheets (timetable and recording) exist.
     - Automatic Creation: Creates missing files if any are not found.
     - Semester Management: Calculates band reservation hours from the previous semester for billing purposes and generates new spreadsheets for the upcoming semester, updating available reservation times.

