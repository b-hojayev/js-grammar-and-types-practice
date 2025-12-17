let a = 10;
let b = a;
b++;

// a !== b
// Reason: Primitive values are copied by value.
// `b` receives a copy of `a`'s value, not a reference to the same memory location.

let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value++;

// obj1.value === obj2.value
// Reason: Objects are assigned by reference.
// Both variables point to the same object in memory,
// so modifying one reference affects the same object.

Object.freeze(obj1);
// Prevents the object from being modified (in non-strict mode, changes are ignored;
// in strict mode, a TypeError is thrown).

/**
 * Lessons Learned:
 *
 * 1. Primitive values (number, string, boolean, null, undefined, symbol, bigint)
 *    are copied by value.
 *
 * 2. Assigning a primitive to another variable creates an independent copy.
 *
 * 3. Objects (including arrays and functions) are copied by reference.
 *
 * 4. Multiple variables can reference the same object in memory.
 *
 * 5. Modifying an object through one reference affects all references to it.
 *
 * 6. `Object.freeze()` prevents modifications to an object,
 *    but it is shallow and does not freeze nested objects.
 *
 * 7. Understanding reference behavior is critical for avoiding
 *    unexpected side effects in applications.
 */
