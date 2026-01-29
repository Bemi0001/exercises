function beregnMoms(beloeb, moms = 0.25) {
    const total = beloeb + (beloeb * moms);
    console.log(total);
}

beregnMoms(800)