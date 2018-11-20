function Bits(x, y) {
    this.x = x
    this.y = y
    this.r = 40

    this.show = function() {
        ellipse(this.x, this.y, this.r, this.r)
        fill(255, 0, 200)
    }
}