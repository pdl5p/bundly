
class C1{
    public name: string;
    public age: number;
}

class C2{

    public c1: C1;

    test(): void {
        this.c1 = new C1();
        this.c1.age = 1;

    }
}