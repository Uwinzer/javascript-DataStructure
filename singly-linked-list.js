/**
 * Created by ZL on 2016-10-28.
 */
var ListNode = function(val) {
    this.val = val;
    this.next = null;
};
function LinkedList() {



    this.length = 0;
    this.head = null;

    this.append=function(ele) {

        var node = new ListNode(ele);
        var current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next
            }
            current.next = node
        }

        this.length++;

    }

}

var link =new LinkedList();

link.append(1);
link.append(2);
link.append(3);


console.log(link.head.next.next.val);
