const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function() {
        // console.log(this.eggCount);
        this.eggCount += 1;
        // console.log(this.eggCount);
        return console.log('EGG')
    }
}

hen.layAnEgg();
hen.layAnEgg();