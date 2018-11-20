function Bits(x, y, r) {
    this.x = x
    this.y = y
    this.r = r

    this.xdir = 1
    this.ydir = -2

    this.show = function() {
        ellipse(this.x, this.y, this.r, this.r)
        fill(255, 0, 200)
    }

    this.move = function() {
        this.x += this.xdir
        this.y += this.xdir
    }
}