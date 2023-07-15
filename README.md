# TouchSomeGrass
An Orbital 2023 Project by Coco Li and Ang Yuki.
Github link: https://github.com/yukiang019/TouchSomeGrass

### Team Name
TouchSomeGrass

## Proof of Concept
[Milestone 2 Video here](https://drive.google.com/file/d/1lJvdBUCuoBKYGajFf_TwNlU4OGAMdozk/view?usp=share_link)

## Deployment
Please download the Expo Go application to best experience TouchSomeGrass.

[Deploy Application Here](https://expo.dev/@yukiang019/grass?serviceType=classic&distribution=expo-go)

## Proposed Level of Achievement
Apollo 11 

## Aim
TouchSomeGrass aims to be a multifunctional mental health app that enables our users to take care of their mental health by utilizing different forms of stress relief and providing physical proof of growth to encourage the development of healthy mental health habits. 

## Problem Motivation
When you have exams, assignments, and projects all due, it can be difficult to take care of your mental health, reflect and manage the stress of studying for everything, which is when your wellbeing may take a backseat.

However, support for mental health improvement is not always accessible. After all, meditation does not come easily to everyone, and it may be difficult to remember to journal and self-reflect daily. Moreover, most people do not have access to appropriate platforms that are specialised for discussing their mental health. 

Given that mental health is such an important aspect of a person’s overall well-being, we have decided to create a one-stop application with various features to make mental health management much more accessible to individuals.

## Vision

TouchSomeGrass will be a helpful and easy tool for users to try out different stress relief methods such as journaling and meditation, which can be daunting to beginners. The journaling function will allow users to document their daily lives, which is easier to do on a mobile phone. The meditation function plays a guided meditation audio which facilitates the user's initial forays into meditation, helping users to develop these healthy habits.

TouchSomeGrass will provide users with a forum to freely discuss mental health issues that may be difficult to ask in person, especially with the existing stigma towards mental health issues.

TouchSomeGrass will help users to track their progress in developing healthy mental health habits with gamification, representing their progress with journaling and meditation with a plant that grows, allowing users to develop greater awareness of their growth, and prompting them to continue using the app, influencing their mental and emotional well-being. By habitually practicing these healthy habits, TouchSomeGrass allows users to build the foundation for long-term mental health habits.

## Project Scope
We have created a mental health mobile application that allows users to journal, meditate, and discuss mental health topics with others in a gamified environment to cultivate good mental health habits.

On the home page of the application, users will see the available features represented as icons at the bottom, as well as a graphic of a tree that represents their progress in terms of improving and tracking their mental health. When the user accesses the journaling and meditation functions of the application, they gain experience points that contribute to the growth of their tree. 

## User Stories
1. As a user that is constantly overwhelmed and has a lot on my mind, I want to use an application with a journaling function to articulate my own thoughts more clearly.
2. As a user that wishes to discuss mental health in a safe space dedicated to such discussions, I want to use an application that is able to provide this sort of space.
3. As a user who treats mental wellness as a constant work in progress, I want to be able to see the progress I have made in my mental health through some type of physical representation.  
4. As a user of applications, I want to use an application that is aesthetically pleasing as it puts me in a good mood.
5. As a user, I want to be guided in meditation as I find it difficult to start on my own.
6. As a user, I want to be aware of the actionable insights regarding my own mental health, and an application to guide me.
7. As a user, I want to have an original and engaging way to track my mental health progress.

## User and Automated Testing 
[View our records of User and Automated Testing here](https://docs.google.com/document/d/1TWTVDlDH6iAHePlVBNua_Ps-Eofc95keRDdeiF5v418/edit)

## Features

### User Account Authentication

Description


As TouchSomeGrass is a personalised mental health app, every user will need to be uniquely authenticated with
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

The meditation function allows users to conveniently experience guided meditation. It allows users to conduct 10 minute meditation sessions, which we have identified as the optimal duration for daily mindfulness. Everybody can afford to spare 10 minutes of their day to exercise mindfulness and experience moments of reflection amid their busy lives. Meditation has the ability to provide a sense of calm, peace and balance that can benefit a person’s emotional well-being. 

Upon pressing the "start" button, the meditation countdown begins. As long as the timer is running, the narration in the background will also be playing to provide users with instructions and prompts for effective meditation. The "start" button becomes a "pause" button when the timer is running, and back to "start" when the "pause" button is pressed. This allows users to conveniently pause and resume their session as they wish. The narration will also resume from where it was stopped, so users can have the full meditation experience even if they choose to take some breaks in between.

Once the 10 minute timer is up, a soft "ding" sound is played to alert the user that the session has ended, in case the user has become so immersed in the meditation that they failed to pay attention to the timer. Should they wish to extend their session and go for another 10 minutes, they can simply press the "reset" button to bring the timer back to 10 minutes, and press "start" again.

This feature was created to make meditation straight-forward and fuss-free for busy Singaporeans. 


### Diagrams
![image](https://github.com/yukiang019/TouchSomeGrass/assets/125233966/ff2029f1-8590-4d5e-b7ed-69e01e77ee5a)

### The Healing Circle

Description


The Healing Circle is a discussion function which allows users to be part of a community where they are able to discuss mental health issues without stigmatisation. The forum function will provide users with a sense of belonging and a feeling of purpose, as they are able to receive and give support to each other in their mental health journey through giving advice, encouragement or simply being a listening ear.

This feature will be implemented by Milestone 3.

### Gamification

Description


The last feature is the gamification of the user’s progress to incentivise users to keep up healthy habits and keep using the app. We have implemented one main element of gamification 
1. Plant growth

As the name suggests, the plant growth gamification is represented by a plant in the home page which will grow each time the journaling and meditation functions are used. User XP is gained when they use the journaling and guided meditation functions, and when an XP milestone is achieved, the tree will experience growth. This allows the user to see a physical representation of the progress they have made with thei r mental health, which will encourage them to keep up the good habits.

This feature will be implemented by Milestone 3.

## Overall Navigation Flow
![image](https://github.com/yukiang019/TouchSomeGrass/assets/125233966/009f3ba3-19af-48c7-9781-705ea67d07a1)

## User Interface Design
[View our User Interface Design here](https://drive.google.com/file/d/1lJvdBUCuoBKYGajFf_TwNlU4OGAMdozk/view?usp=share_link)

## Unified Modelling Language (UML) Diagrams
![image](https://github.com/yukiang019/TouchSomeGrass/assets/125233966/e175dbc2-c788-40cf-af76-6f2ecc84734b)

## Software Engineering Practices

### Agile Software Development Cycle
Agile software development is a collaborative approach that prioritizes adaptability, customer satisfaction, and continuous improvement. It emphasizes frequent delivery of working software increments, close collaboration with customers, flexible planning, self-organizing teams, and a focus on learning and adapting throughout the development process.

Using agile development, we have divided our  project into smaller, manageable units called "sprints" or iterations, usually lasting from one to four weeks. 

During each sprint, our team members take on the roles of developers, testers, designers, working together to deliver a functioning software increment. This iterative approach allows for faster delivery of software features and enables teams to adapt to changing requirements and customer needs.

This also allows us to mitigate risks early on in our software development journey and improve the quality of our final product. 

### Version Control
Branching

We used GitHub for version control and to manage our code. When developing new features, we branch off to a feature branch with the feature name. By doing so, we simplify the debugging process by preventing cross-contamination of code. After completing the feature, the branch is committed and a pull request is completed to merge the feature branch into the main. 

Pull requests

We used Githhub's pull request when updating the main branch. The
member responsible for programming the feature creates a pull request, assigning the other member to review their code, which enables communication and prevents bugs in the code. Once the code is reviewed and approved, the pull request is completed.

Git Issues

We used Git Issues to keep track of all open issues or bugs within the code. We also included tags
in order to identify the type of issue we encountered. Once the problem has been debugged, the issue is closed.

Debugging Challenges

Bug #1

Bug Description:
Unknown errors arose when there were conflicting dependencies installed using npm. We suspect that it happened while we were installing quite a number of dependencies that we needed to run our automated tests. 

Bug Impact: 
This was by far the biggest hurdle of our project, as this bug prevented us from even running the application on expo go even though the code was correct. As such, the best option for us was to rebuild the application entirely and refer to our old model as reference. 

Bug Resolution:
Upon further investigation, we realised that npm was the cause of these dependency issues all along. Compared to npm, Yarn uses a different dependency resolution algorithm than npm. Yarn uses a "lockfile" (yarn.lock) to ensure deterministic and consistent installations across different environments. This means that Yarn will always install the exact versions of dependencies specified in the lockfile, avoiding any potential conflicts. In contrast, npm's dependency resolution algorithm can sometimes lead to different versions being installed, which can cause compatibility issues. We then decided that it would be better for us to start our project on a clean slate by rebuilding our application on yarn and work on yarn for the rest of our project.

Bug Prevention: 
To prevent similar issues from arising in the future, we have been working purely on yarn. We also ensure to check that the application is properly saved and displayed via expo go whenever some changes are made, such that we can troubleshoot as soon as possible and with more accuracy if needed. We also made sure that we are installing the correct versions of the required dependencies from the get go, to minimise these dependency conflicts as much as possible.
 

Bug #2

Bug Description:
Another bug we encountered was related to the storage of Firebase user data. Specifically, the user data was not being stored correctly, which resulted in the inability to utilise Firebase for storing other user details.

Bug Impact: 
Since Firebase is commonly used for storing user data in web and mobile applications, the inability to store user data prevented the proper functioning of the various features that relied on this data, namely the gamification, discussion page and journal functions. As a result, the application faced limitations in terms of user registration, authentication, and personalised user experiences.

Bug Resolution:
To resolve this issue, a thorough investigation was conducted to identify the root cause of the problem. It was discovered that the bug stemmed from an incorrect configuration or usage of Firebase's data storage mechanism. The code responsible for storing user data in Firebase was reviewed and analysed to identify any logical errors or incorrect usage patterns. It turned out that the code was not written to install firestore appropriately and as such firestore was not configured to store the user data. This explained why we could not see the user data being stored properly on our firebase console. After identifying the problem, the imports and code was modified to properly set up firebase’s firestore. The problem has since been solved. 

Bug Prevention: 
We learnt that we should always solve technical problems with a top-down approach. Only when we looked at the problem in its appropriate order, starting from the entering of user data to the storage and then the retrieval, did we realise that the firebase setup was the issue all this while. As such, we would like to use this technique to solve any future technical issues.


Bug #3

Bug Description:
Another bug encountered in the project was related to the real-time updating of displayed data. Despite updating the underlying data, the displayed information on the user interface did not reflect these changes promptly.

Bug Impact:
The main feature that was affected was the discussion function. When the user sets a new username for themselves, this change failed to be reflected in the chat room unless the whole application was reloaded. The initial workaround for this issue was making the users log out when they changed their username, but it was long winded and did not make sense.
This bug had a negative impact on the user experience as it led to a discrepancy between the actual data and the displayed information. Users may have received outdated or incorrect information, causing confusion and potential errors in decision-making and communication. We had overlooked the need for real-time data integration.

Bug Resolution: 
We then chanced upon the idea of listeners, which can be used to update the firebase data real time. Listeners were incorporated into the relevant components to monitor changes in the underlying data. These listeners were designed to trigger an update in the displayed information whenever a change occurred. The listener function was then configured to synchronise the displayed data with the updated information. This involved retrieving the updated data from the backend or relevant data source and reflecting it in the user interface. The username could then be properly updated.

Bug Prevention:
To prevent similar issues in the future, real-time data integration was prioritised from the initial design phase when developing new components or features. This approach ensures that the user interface is always in sync with the underlying data.


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
