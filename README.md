# Acceptance Criteria

**_As a teacher, I want to navigate to one of my classes using my timetabled list of classes, So that I can quickly view the status of activities in my class_**

---

## 4.3.1 Displaying schools

---

### 4.3.1.1 Teacher has one school

Given I am Teacher

And I have more than one class

And I teach in only one school

When I open my landing page

Then I will see a list of all the classes

And It will have the heading ‘My classes’

And Each each class will be listed as per 4.3.2

---

### 4.3.1.2 Teacher has multiple schools

Given I am Teacher

And I have multiple classes across more than one school When I open my landing page

Then I will see a list of all the schools that I have classes at

And It will have the heading ‘My classes’

And Each school listed will display the schools name (without the suburb) and a ChevronDown (E70D) icon

---

### 4.3.1.3 Clicking the school

Given I am Teacher

And I have multiple classes across more than one school

And I have opened my landing page

When I click on a minimised school

Then I will see a list of all of my classes appear under the school And The school will now display a ChevronUp (E70ED) icon And The classes
will be displayed according to 4.3.2

Given I am Teacher

And I have multiple classes across more than one school And I have opened my landing page

When I click on a expanded school

Then The list of classes is hidden

---

## 4.3.2 Displaying classes

---

### 4.3.2.1 Displaying less than 7 classes

Given I am Teacher

And I have less than 7 classes in one school (2-6 classes)

When I open my landing page (and expand my school, if more than one school) Then I will see a list of all of my classes in that school

And The class will be displayed as its name

And It will link to its class page

---

### 4.3.2.2 Displaying year group links when more than 6 classes in a school

Given I am Teacher

And I have more than 6 classes in one school

When I open my landing page (and expand my school, if more than one school)

Then I will see a list of all of year groups I have classes in

And Each year group will labelled with its name (Prep or Year x) and a ChevronDown (E70D) icon

---

### 4.3.2.3 Clicking the year group

Given I am Teacher

And I have more than 6 classes in one school

And I have opened my landing page

When I click on a minimised year group

Then I will see a list of all of my classes appear under the year group And The year group will now display a ChevronUp (E70ED) icon And Each
class will be displayed as its name

And It will link to its class page

Given I am Teacher

And I have more than 6 classes in one school And I have opened my landing page

When I click on a expanded year group

Then The list of classes is hidden

---

### 4.3.2.4 Clicking on a class

Given I am Teacher

And I have opened my landing page And I have classes displayed

When I click on a class

Then The class' page will be displayed

---

## 4.3.3 Teacher has one or no classes

---

Given I am Teacher

And I have no classes

When I open my landing page

Then I will not see the class list at all
