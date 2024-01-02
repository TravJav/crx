
# Quick start

## How to run
npm start in the root directory

## How to test

npm test in the root directory

## Add new script

go into the package.json and add the desirec command with a key value



## Include a README that includes the following:
"If you made any assumptions, what are they Outline what else needs to be done if given more time"




### Lets break it up into sections 



# Form


# What I changed and why

Keep in mind in a real environment changes wouldn't be made and found out about when the code is displayed on the development site.
it would be talked about and everyone may contribute individual arguements until we derive the most effective solution taking everything
into consideration.

There are a few thigs I changed , the way we display the index.

# Index counter

We have a max 5 accordian items which was outlines in the document, each index has it's own colour scheme and in the designs the colour
is flush against the left side I found that style a bit overpowering in context of what we are trying to do which is display the referrals
with their full names along with the accordian actions. I think the index counter is good because it has a relationship with the max items 
or max referrals in this case

# DOB
DOB was changed, the style is a date-picker where as the other looked like a normal input field using the picker is way easier for the user
Address bar is slightly different because it has a drop-down for the address options to hang from but also the solid border which is inherited from mui.

# Icons
You will notice the icons like the birthday cake is absent from the fields - and this can go both ways but in the form I think it's very clean
in the sense that the user knows exactly the the fields are mandatory ( red asterisk ) perhaps on mobile the symbols would be better due to the limited screen space? although I do see a strong argument for visually impaired using the symbols instead, but I am assuming this referral form would be filled out by someone on the team.

# Add +
"Add another referral" - this part performs the action but, I moved it to the left side a bit so it's right under the names I find this kind
of follows the natural line of site when looking at this page but I don't feel that strong about this opinion I am just creating a talking point and because it's not a button more of an extension of a sub-method of a direct form action.


# Assumptions

Inside the form I prepopulate the form contact language with English as this would be the most common language used to contact others

The trash icon I am assuming we want a delete action for the target index in the referral form, because of that I have added the functionality

alert banner - if we try to add more than 5 referrals we get an alert in the top banner. This doesnt quite match the spec but its from mui 
so I used this to save time and created a child - > parent callback style to control the alert message so it comes from the parent view/ component. There are two one for success when submitting the dummy button "send referrals" and the error one provoked when we try to add more than 5 referrals as mentioned.


Added circleci dummy yaml in to show intent that this would be employed in circleci if that was part of the pipeline in this what I would do is call run-test-scripts.sh from the yaml and this would start all the jest tests by running the command(s) by doing this we can add other things in the future by using the bash script to call the files i.e access different env vars etc.

I also added tests as you can see ! the tests are not perfect and I believe there is something wrong with 2 of them due to axios needing to be mocked but I included them to show good contect and to support the belief every component in a perfect world should be mocked or tested.


# TODO if I had more time


1. The form right now accepted input but when we click the submit button it doesn't do anything really useful to us
    for this we need to get all the values from the form inputs and validate them. 
    Building on the above we would also need more information on the db structure where this is going etc and how to package the data for the post requests and even what response we would expect back in this case

2. We need to do phone number validation and country code, it would be nice to have a drop down of the country codes with their respective  flags
3. Icons need to be evaluated again, I think it looks pretty busy using the icons in here when there is already label defintions
4. Quick form full clear for the form that is expanded currently
5. I'd fix the banner and make it respond a bit better as it's not flush on both sides and I was running short of time
6. I would love to add tool tips, I like them because they dont bombard the user with info, only when asked for

7. I would love to do e2e I would have made a new folder here that has a container inside and the docker composes. I would start that up in circle ci and then I would use Cypress to run a agent to run this e2e if there was a server hooked up and upload any results to cloudwatch using some circleci role I would have created 

8. I would ask more questions I would try to gain a better understanding of where the next views are, what the user flow is to make small adjustments or asks to try and improve this and see if everything proposed makes sense here
9. ** "New Referral" needs to be updated with the complete full name using a callback function Child -> Parent that will take the full name and index so it is updated upon text input.

10. CSS styles need to be applied to the label inputs


# Quick Shots

## With the four pre-populated referrals

<img width="1567" alt="Screenshot 2024-01-02 at 11 28 20 AM" src="https://github.com/TravJav/crx/assets/16505078/c8064aa7-f4f4-446d-ab7e-a70acae2eb05">

## After hitting the add referral button

<img width="1355" alt="Screenshot 2024-01-02 at 11 30 12 AM" src="https://github.com/TravJav/crx/assets/16505078/f81702b1-274f-4107-b169-05a9d26cc3e1">

## Trying to add more than the specified amount of referrals 

<img width="1673" alt="Screenshot 2024-01-02 at 11 31 29 AM" src="https://github.com/TravJav/crx/assets/16505078/4c56a038-02f8-4204-b63a-4d494931e173">

## Submission success concept banner

<img width="1691" alt="Screenshot 2024-01-02 at 11 32 46 AM" src="https://github.com/TravJav/crx/assets/16505078/10c8ca78-edfe-4503-8798-225ad745fa07">

