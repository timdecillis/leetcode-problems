/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node
* at which the intersection of two linked lists begins,
* or null if there is no such intersection.
*
* Example:
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return D
* as the node of intersection.
*
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return NULL
* as there is no point of intersection.
*
*    A → B → C → D
*    X → Y → Z
*
*/

// Helper function (do not edit)
var Node = function(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
};



var linkedListIntersection = function(list1, list2) {
  var head1 = list1;
  var array = [];
  while (head1) {
    array.push(head1.value);
    head1 = head1.next;
  }
  var head2 = list2;
  while (head2) {
    if (array.includes(head2.value)) {
      return head2;
    }
    head2 = head2.next;
  }
  return null;
};


