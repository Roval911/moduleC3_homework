const parser = new DOMParser();

let xmlStr = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`

const xmlDoc = parser.parseFromString(xmlStr, "text/xml");
const listNode = xmlDoc.querySelector("list");
const name_Node = listNode.getElementsByTagName("name")[0];
const nameNode = xmlDoc.getElementsByTagName("first")[0].innerHTML;
const sernameNode = xmlDoc.getElementsByTagName("second")[0].innerHTML;
const ageNode = xmlDoc.getElementsByTagName("age")[0].innerHTML;
const profNode = xmlDoc.getElementsByTagName("prof")[0].innerHTML;
const langAttr = name_Node.getAttribute("lang");
const name2Node = xmlDoc.getElementsByTagName("first")[1].innerHTML;
const sername2Node = xmlDoc.getElementsByTagName("second")[1].innerHTML;
const age2Node = xmlDoc.getElementsByTagName("age")[1].innerHTML;
const prof2Node = xmlDoc.getElementsByTagName("prof")[1].innerHTML;
const name2_Node = listNode.getElementsByTagName("name")[1];
const lang2Attr = name2_Node.getAttribute("lang");   


const list = [{name: nameNode + ' ' + sernameNode, age: ageNode, prof: profNode, lang: langAttr},
                      {name: name2Node + ' ' + sername2Node, age: age2Node, prof: prof2Node, lang: lang2Attr}];

console.log(list)