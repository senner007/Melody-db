### Title:
Tag, play and visualize melodies for music theoretical/educational purposes.

#### Purpose:
- wip

#### Description:
- Play and visualize melodies using vexflow and real piano recorded audio.
- Add tags/descriptions to melodies with admin authentication. 
- Automate and ease conversion of midi melodies to string based descriptions and store in db

#### Technologies:
- React / (maybe Nativescript/React Native)
- Jest
- Typescript
- Vexflow
- Tonejs midi
- Webmidi
- Dotnet 6 Api
- Entity Framework
- XUnit
- Fluent Assertions
- Github actions

#### Tags:
- stepwise
- leaps
- diatonic
- modal interchange
- modulation ... etc

#### Backend Entity Class Properties:
- melody : string ( melody definition converted to a string containing enough information to be parsed by vexflow and played using piano sounds) no duplicates
- title : string (optional)
- composer: string (optional)
- tagname1
- tagname2
- tagname3 ... etc

#### Progress:
- Jest testing issues resolved
- Github Actions React Build and Test