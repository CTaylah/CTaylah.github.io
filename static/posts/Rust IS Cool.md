Lifetimes of the EMPIRIAL REGIME

FOOS RO DAH

Lifetimes are used to prevent you from dealing with dangling references, which is when you have a reference to some data has been freed or gone out of scope.

```c
fn main() {
    let r;                // ---------+-- 'a
                          //          |
    {                     //          |
        let x = 5;        // -+-- 'b  |
        r = &x;           //  |       |
    }                     // -+       |
                          //          |
    println!("r: {r}");   //          |
}                         // ---------+
```

Example of lifetimes in a function signature

```rust
//Apply the constraint: the returned refernce will be valid as long as both the parametres are valid

// Note that is implied that longest does not own the return value. It wouldn't compile if it did
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```
What the lifetime annotations are saying here, is that the reference being returned will last at least as long as the parameters. The following code does not compile:
```rust
fn main() {
    let result;
    let string2 = String::from("xyz");

    {
        let string1 = String::from("abcdefg");
    }
        let result = longest(string1.as_str(), string2.as_str());
        println!("The longest string is \"{result}\"");
}
```
the scope of `string1` causes it to 'die' before string2 and result do, so it has a "lesser" lifetime than the two of them

### Lifetimes on structs
In order to get a struct to hold a reference (a value it doesn't own), you need to add lifetime annotations.
```rust
struct ImportantExcerpt<'a> {
    part: &'a str,
}

fn main() {
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence = novel.split('.').next().unwrap();
    let i = ImportantExcerpt {
        part: first_sentence,
    };
}
```
This ensures that `ImportantExcerpt` will not outlive `part` .

It used to be that every reference required a lifetime annotation, but over time the Rust team found that there were several situations in which lifetimes could be confidently inferred. These cases form the *lifetime elision rules*

Methods don't need lifetimes..?


The `'static` lifetime denotes that a reference can live for the entire duration of the program
[The Rust Programming Language: Lifetimes](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html)
