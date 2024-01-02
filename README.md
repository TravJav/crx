# Quick Start

## How to Run
Run `npm start` in the root directory.

## How to Test
Run `npm test` in the root directory.

## Adding New Scripts
To add a new script, navigate to `package.json` and add the desired command with a key-value pair.

# README Content

"If you made any assumptions, what are they? Outline what else needs to be done if given more time."

### Sections Breakdown

## Form

### What I Changed and Why

In a real environment, changes wouldn't be made and found out about when the code is displayed on the development site. Discussions and contributions would lead to the most effective solution considering all aspects.

#### Index Counter

I've adjusted the index counter's display as per the designs and ensured each index has a distinctive color scheme. The index counter correlates with the maximum number of referrals.

#### DOB

Changed the DOB style to a date-picker for better user experience.

#### Icons

Removed icons like the birthday cake to maintain a cleaner form appearance, ensuring clarity with red asterisks for mandatory fields. Icons might be useful for mobile or visually impaired users, but this form targets team members.

#### "Add +" Button

Shifted the "Add another referral" button slightly to align with the natural line of sight when viewing the page.

### Assumptions

Prepopulated the contact language field with English, assuming it's the most commonly used language.

Implemented a delete action using the trash icon for each referral index.

Utilized MUI's alert banner to handle alerts for adding more than 5 referrals, allowing control from the parent view/component.

Added a dummy CircleCI YAML file to demonstrate the intent of employing CircleCI in the pipeline.

Included tests, though imperfect due to Axios mocking issues, to showcase the importance of testing and mocking.

## TODO if I Had More Time

1. **Form Submission:** Implement form submission logic to process and validate form inputs.
2. **Phone Number Validation:** Implement phone number validation and include a dropdown for country codes.
3. **Reevaluate Icons:** Reconsider the usage of icons for a less cluttered appearance.
4. **Quick Form Clear:** Implement a full clear functionality for the expanded form.
5. **Banner Improvement:** Enhance the banner for better alignment and responsiveness.
6. **Tooltips:** Add tooltips for optional info, enhancing user experience.
7. **End-to-End Testing:** Set up E2E testing using Cypress and Docker, integrating with CircleCI for server communication and result uploads.
8. **Seek Clarifications:** Engage in discussions to gather more details on future views and user flow to refine the current implementation.




# Quick Shots

##With the four pre-populated referrals

<img width="1567" alt="Screenshot 2024-01-02 at 11 28 20 AM" src="https://github.com/TravJav/crx/assets/16505078/c8064aa7-f4f4-446d-ab7e-a70acae2eb05">

##After hitting the add referral button

<img width="1355" alt="Screenshot 2024-01-02 at 11 30 12 AM" src="https://github.com/TravJav/crx/assets/16505078/f81702b1-274f-4107-b169-05a9d26cc3e1">

##Trying to add more than the specified amount of referrals 

<img width="1673" alt="Screenshot 2024-01-02 at 11 31 29 AM" src="https://github.com/TravJav/crx/assets/16505078/4c56a038-02f8-4204-b63a-4d494931e173">

##Submission success concept banner

<img width="1691" alt="Screenshot 2024-01-02 at 11 32 46 AM" src="https://github.com/TravJav/crx/assets/16505078/10c8ca78-edfe-4503-8798-225ad745fa07">



