function beregnMoms(beloeb, moms = 25) {
    const total = beloeb + (beloeb * moms / 100);
    console.log(total);
}

beregnMoms(800)