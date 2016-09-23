function Cow() {
    this.mowed = false;
    this.moo = function moo() {
        this.mowed = true;
        return 'moo!';
    };
}