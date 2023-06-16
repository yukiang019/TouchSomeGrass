# TouchSomeGrass
An Orbital 2023 Project by Coco Li and Ang Yuki.

### Team Name
TouchSomeGrass

## Proof of Concept
milestone 2 video here

## Deployment
Refer to the attached apk file: apk file here

## Proposed Level of Achievement
Apollo 11 

## Aim
TouchSomeGrass aims to be a multifunctional mental health app which enables our users to take care of their mental health by utilizing  different forms of stress relief and providing physical proof of growth to encourage the development of healthy mental health habits. 

## Problem Motivation
When you have exams, assignments, and projects all due, it can be difficult to take care of your mental health, reflect and manage the stress of studying for everything, which is when your wellbeing may take a backseat.

However, support for mental health improvement is not always accessible. After all, meditation does not come easily to everyone, and it may be difficult to remember to journal and self reflect daily. Moreover, most people do not have access to appropriate platforms that are specialised for discussing their mental health. 

Given that mental health is such an important aspect of a person’s overall well-being, we have decided to create a one-stop application with various features to make mental health management much more accessible to individuals.

## Vision

TouchSomeGrass will be a helpful and easy tool for users to try out different stress relief methods such as journaling and meditation, which can be daunting to beginners. The journaling function will allow users to document their daily lives, which is easier to do on a mobile phone. The meditation function plays a guided meditation audio which facilitates the user's initial forays into meditation, helping users to develop these healthy habits.

TouchSomeGrass will provide users with a forum to freely discuss mental health issues that may be difficult to ask in person, especially with existing stigma towards mental health issues.

TouchSomeGrass will help users to track their progress in developing healthy mental health habits with gamification, representing their progress with journaling and meditation with a plant that grows, allowing users to develop greater awareness of their growth, and prompting them to continue using the app, influencing their mental and emotional well-being. By habitually practicing these healthy habits, TouchSomeGrass allows users to build the foundation for long-term mental health habits.

## Project Scope
We have created a mental health mobile application that allows users to journal, meditate, and discuss mental health topics with others in a gamified environment to cultivate good mental health habits.

At the home page of the application, users will see the available features represented as icons at the bottom, as well as a graphic of a tree that represents their progress in terms of improving and tracking their mental health. When the user accesses the journaling and meditation functions of the application, they gain experience points that contribute to the growth of their tree. 

## User Stories
1. As a user that is constantly overwhelmed and has a lot on my mind, I want to use an application with a journaling function to articulate my own thoughts more clearly.
2. As a user that wishes to discuss mental health in a safe space dedicated for such discussions, I want to use an application that is able to provide this sort of space.
3. As a user who treats mental wellness as a constant work in progress, I want to be able to see the progress I have made in my mental health through some type of physical representation.  
4. As a user of applications, I want to use an application that is aesthetically pleasing as it puts me in a good mood.
5. As a user, I want to be guided in meditation as I find it difficult to start on my own.
6. As a user, I want to be aware of the actionable insights regarding my own mental health, and an application to guide me.
7. As a user, I want to have an original and engaging way to track my mental health progress.

## Features

### User Account Authentication 
Description
As TouchSomeGrass is a personalised mental health app, every user will needs to be uniquely authenticated with
their own account.

TouchSomeGrass has implemented 1 main sign-in method:
1. Email and password

Utilising the Firebase SDK Authentication, users can:
● Enter their email and password to log in
● If the user has not created an account, they can create an account by entering their email and password and pressing sign up

The relevant call to the authentication instance with Firebase is made when the user presses log in or sign up. Logging in with email and password calls signInWithEmailAndPassword, and signing up with email and password calls createUserWithEmailAndPassword.
Based on the user’s action, the relevant call to the Firebase authentication instance is made.
The authentication exceptions with Firebase are handled within a try-catch block and an error message is
displayed when the user enters an invalid input.
When the user successfully logs in or signs up, they will be directed to the Welcome page, and their account will be reflected within the Firebase authentication.

Challenges
For user authentication, our main challenge was checking whether the user was an existing one or not, and directing existing users to the Welcome page. Initially, we experienced difficulties in differentiating between log in and sign up with Firebase authentication. Having two different calls to Firebase depending on whether or not the user exists allows for the problem to be resolved.

### Diagrams
![image](https://github.com/yukiang019/TouchSomeGrass/assets/125233966/3bdfcc68-bb5b-4f04-92e2-1bd0eef9b8c5)

### Journaling

Description
The journaling function allows users to pen down anything that comes to their mind, especially when they are feeling overwhelmed. This feature provides them with an opportunity to articulate their state of mind at any moment by simply accessing the function within the application on their smartphone, which is easier than carrying around a physical journal. 

In the journaling page, the date is displayed. The function also provides title and content input bars for the user to jot down their feelings, thoughts, or present state of mind with the touch of a finger. We also provide an icon selection tab for every entry that allows the user to select one icon out of five that represents their mood when writing the entry. 

After entering all the relevant details, the user is able to submit their entry by pressing the save button, which will then save the entry to the bottom of the page with the date the entry was made, their mood, and the title and content of their journal. An alert will appear once the entry is successfully submitted. Users are able to review past entries by simply scrolling through the existing entries, and reflect on their moods as well as feelings over time. This allows them to gain insight on their mental health and moods, and instils mindfulness through the healthy coping strategy. However, if the user feels that any of their past entries are no longer representative of their point of view, or disagree with the mindset they had at the time of submission of the entry, they are able to delete the entry by pressing and holding on it. A message confirming the deletion of the entry will appear, and the user is able to delete it by pressing the Confirm option.

Challenges
For the journaling function, our main challenge was the saving of the journal entries within the Journal page, and making sure that the entries were able to be accessed and deleted. We were able to achieve this by assigning each entry with a unique ID using react-uuid to identify each individual entry.

### Diagrams
![image](https://github.com/yukiang019/TouchSomeGrass/assets/125233966/9ee297f4-610a-4494-ad64-9dffd8ab31a0)

### Meditation

Description
The meditation function allows users to experience guided meditation...

Additionally, there will be a guided meditation feature that allows users to have moments of mindfulness amid their busy lives. Meditation has the ability to provide a sense of calm, peace and balance that can benefit a person’s emotional well-being. Accessing the function allows the user to pull up a video with a 10 minute countdown, where the user can meditate for 10 minutes while listening to the soothing sounds of nature.

### Diagrams
![image](https://github.com/yukiang019/TouchSomeGrass/assets/125233966/ff2029f1-8590-4d5e-b7ed-69e01e77ee5a)

### The Healing Circle

Description
The Healing Circle is a discussion function which allows users to be part of a community where they are able to discuss mental health issues without stigmatisation. The forum function will provide users with a sense of belonging and a feeling of purpose, as they are able to receive and give support to each other in their mental health journey through giving advice, encouragement or simply being a listening ear.

This feature will be implemented by Milestone 3.

### Gamification

Description
To incentivise users to continue using the app, we have implemented three main elements of
gamification
1. Login streak
2. Tier system
3. Accomplishment badges
This three information is accessible inside the user card that can be found in the Analytics
Page. As the name suggests, login streak tracks the consecutive number of days the user has
logged in.
Secondly, the user XP can be gained when performing certain actions in the app such as
logging and completing tasks and milestones. The corresponding tier title is shown below the
name in the user card. The amount of XP can also help to generate the progress bar around
the user’s profile image.

EVOLVE

39

For the badges, only up to 4 can be displayed within the user card in the Analytics Page.
However, users can view their collections under the Customise Badges tab under Settings.
From there, they can choose the 4 badges they want to display in the Analytics Page.
The last feature is the gamification of the user’s progress to incentivise users to keep up healthy habits and keep using the app. We have implemented one main element of gamification 
1. Plant growth

As the name suggests, the plant growth gamification is represented by a plant in the home page which will grow each time the journaling and meditation functions are used. User XP is gained when they use the journaling and guided meditation functions, and when an XP milestone is achieved, the tree will experience growth. This allows the user to see a physical representation of the progress they have made with thei r mental health, which will encourage them to keep up the good habits.

This feature will be implemented by Milestone 3.

## Overall Navigation Flow
![image](https://github.com/yukiang019/TouchSomeGrass/assets/125233966/a290aea5-f03c-48a9-9ca4-dd9adaf90420)

## User Interface Design
screenshots here

## Unified Modelling Language (UML) Diagrams
diagram here

## Software Engineering Practices
### Agile Software Development Cycle

### Version Control
Branching
We used Github for version control and to manage our code. When developing new features, we branch off to a feature branch with the feature name. By doing so, we simplify the debugging process by preventing cross-contamination of code. After completing the feature, the branch is committed and a pull request is completed to merge the feature branch into the main. 

Pull requests
We used Githhub's pull request when updating the main branch. The
member responsible for programming the feature creates a pull request, assigning the other member to review their code, which enables communication and prevents bugs in the code. Once the code is reviewed and approved, the pull request is completed.

Git Issues
We used Git Issues to keep track of all open issues or bugs within the code. We also included tags
in order to identify the type of issue we encountered. Once the problem has been debugged, the issue is closed.

### Security Measures
The private keys and tokens to our Firebase Authentication are enclosed in the .env file inside .gitignore so that it is not uploaded to the main branch when committing changes, ensuring that no unwanted changes are made.

## Quality Control
### Automated Testing
Automated testing is important in order to test the app's features and fix bugs, making sure the app performs as expected.
testing info here

### User Testing
User testing was also done with people matching our target audience. User testing is the process of having end users test and evaluate
the product or feature.
testing info here

## Challenges faced
Lack of testing resources
The main challenge we faced in testing was the lack of resources for testing react native apps. Especially with using npm and react native, there were many errors that we encountered regarding incompatibility, and it was difficult to find online resources on how to resolve these errors.

Designing the User Interface
The main challenge we faced in designing a user interface was creating our desired aesthetic without compromising on functionality. We initially planned the design of our app on Figma, which offered many fonts and icons that were not transferable to react native. Hence, we changed some aspects of our design to accomodate to react native and keep the functionality of our features.

## Tech Stack
Expo Go (Mobile app development)
Firebase (Account authentication)
ReactNative (Mobile app development)
Figma (User Interface design)
Git and Github (Version control, issue tracking)

## Features and Timeline
<img width="505" alt="Screenshot 2023-05-12 at 4 54 41 PM" src="https://github.com/yukiang019/TouchSomeGrass/assets/122513777/5f311e2e-9acc-4adf-89be-1cab92e8e506">

## Project Log
https://docs.google.com/spreadsheets/d/1UiJPACbjiOF8W-4iBut9unPvfrLmOsiae3ZBzLZpFZY/edit#gid=0
