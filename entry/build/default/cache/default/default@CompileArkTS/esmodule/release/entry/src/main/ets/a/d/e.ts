import mediaquery from "@ohos:mediaquery";
export class a1 {
    static readonly j1: string = 'sm';
    static readonly l1: string = 'md';
    static readonly m1: string = 'lg';
    static readonly n1: string = 'currentBreakpoint';
    static readonly o1: string = '(320vp<=width<600vp)';
    static readonly q1: string = '(600vp<=width<840vp)';
    static readonly s1: string = '(840vp<=width)';
}
declare interface b1<T> {
    sm: T;
    md?: T;
    lg?: T;
}
export class c1<T> {
    options: b1<T>;
    constructor(option: b1<T>) {
        this.options = option;
    }
    getValue(i1: string): T {
        if (i1 === a1.l1 && this.options.md !== undefined) {
            return this.options.md as T;
        }
        if (i1 === a1.m1 && this.options.lg !== undefined) {
            return this.options.lg as T;
        }
        return this.options.sm as T;
    }
}
export class d1 {
    private currentBreakpoint: string = a1.j1;
    private t1?: mediaquery.MediaQueryListener;
    private u1?: mediaquery.MediaQueryListener;
    private v1?: mediaquery.MediaQueryListener;
    public w1(): string {
        return this.currentBreakpoint;
    }
    public z1(): boolean {
        return this.currentBreakpoint === a1.m1 ||
            this.currentBreakpoint === a1.l1;
    }
    private a2(h1: string): void {
        if (this.currentBreakpoint !== h1) {
            this.currentBreakpoint = h1;
            AppStorage.setOrCreate<string>(a1.n1, this.currentBreakpoint);
        }
    }
    private b2 = (g1: mediaquery.MediaQueryResult): void => {
        if (g1.matches) {
            this.a2(a1.j1);
        }
    };
    private c2 = (f1: mediaquery.MediaQueryResult): void => {
        if (f1.matches) {
            this.a2(a1.l1);
        }
    };
    private d2 = (e1: mediaquery.MediaQueryResult): void => {
        if (e1.matches) {
            this.a2(a1.m1);
        }
    };
    public register(): void {
        this.t1 = mediaquery.matchMediaSync(a1.o1);
        this.t1.on('change', this.b2);
        this.u1 = mediaquery.matchMediaSync(a1.q1);
        this.u1.on('change', this.c2);
        this.v1 = mediaquery.matchMediaSync(a1.s1);
        this.v1.on('change', this.d2);
        if (this.t1.matches) {
            this.a2(a1.j1);
        }
        else if (this.u1.matches) {
            this.a2(a1.l1);
        }
        else if (this.v1.matches) {
            this.a2(a1.m1);
        }
    }
    public unregister(): void {
        this.t1?.off('change', this.b2);
        this.u1?.off('change', this.c2);
        this.v1?.off('change', this.d2);
    }
}
