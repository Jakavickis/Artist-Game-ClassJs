class Artist {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.songs = [];
        this.songWorth = 0;
        this.balance = 0;
    }
    intro() {
        return `Hi, my name is ${this.name} and I am a musician!`;
    }

    songPrice(songPrice) {
        this.songWorth = songPrice / 100;
        return `${this.name}'s price per song is ${this.songWorth} ${this.currency}`;
    }

    addSong(songName) {
        let newSong = {};
        newSong.name = songName;
        newSong.playCount = 0;
        this.songs.push(newSong)
    }

    playlist() {
        let list = `${this.name}'s playlist:\n====================\n`

        for (let i = 0; i < this.songs.length; i++) {
            list += `${i + 1}. ${this.songs[i].name} (${this.songs[i].playCount}) \n`;
        }
        return list
    }

    playSong(index) {
        this.songs[index].playCount++;
        this.balance += this.price;
        return `Playing song: ${this.songs[index].name}.`
    }

    fortune() {
        return `Total lifetime wealth of ${this.name} is ${this.balance.toFixed()} ${this.currency} EUR right now!`
    }

}

export { Artist }