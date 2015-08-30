<h1>Helpers</h1>
<br/>
This fun collection of JS files, provides some tooling that i use with alot of projects.<br/>

Some documentation for the most frequently used:<br/>
<b>guid.js</b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;class - <strong>Guid</strong><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method - newGuid(): generates a lowercase random guid.<br/>
example:
```
Guid.newGuid()
```
result:"9619d99e-ac91-874d-06d2-2512ab68a465"<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method - isGuid(str): returns bool, checks whehter input string is a guid.<br/></br>

<b>namespace.js</b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method - namespace(name, seperator, container): generates a hierarchy of objects to the by the desired string.<br/>
example: 
```
namespace("solution.project").SomeClass = function () { }
```
will create an object under the following tree: solution.project.SomeClass<br/><br/>

<b>stringPrototype.js</b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;class - <strong>String</strong><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method - format(): acts like c++'s format function.<br/>
example: 
```
            "{0} World {1}".format("Hello",":)");
```
<br/>
result: "Hello World :)"
<br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method - camelize(): replaces first letter to uppercase and lowers the rest.
example: 
```
            "hello".camelize(); 
```
result: "Hello";


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method - stripAllAfter(str): Cuts of a string after a specific character/word.<br/></br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method - contains(str): Checks whether an input string is contained in the string, one or more times.<br/><br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method - hashCode(): generates a number identifier coressponding to the string.



