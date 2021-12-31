const getStatus = () => {
    const getTerm = (month) => {
        const isNumber = !isNaN(month);
        if ((isNumber && month <= 4) || month === "w" || month === "W") {
            return 1;
        } else if ((isNumber && month >= 8) || month === "f" || month === "F") {
            return 3;
        } else {
            return 2;
        }
    }

    const getTermWord = (term) => {
        if (term === 1) {
            return "Winter";
        } else if (term === 2) {
            return "Summer";
        } else {
            return "Fall";
        }
    }

    class SeqTerm {
        constructor(term, year) {
            this.term = getTerm(term);
            this.year = year;
        }
    }

    const sequence = [new SeqTerm("f", 2021), new SeqTerm("s", 2022), new SeqTerm("w", 2023), new SeqTerm("f", 2023), new SeqTerm("s", 2024), new SeqTerm("w", 2025)];
    const date = new Date();
    const now = new SeqTerm(date.getMonth(), date.getFullYear());

    let workTermIdx = -1;
    for (let i = 0; workTermIdx === -1 && i < sequence.length; ++i) {
        if (sequence[i].year >= now.year) {
            if (sequence[i].term <= now.term) {
                workTermIdx = i + 1;
            } else {
                workTermIdx = i;
            }
        }
    }

    if (workTermIdx === -1 || workTermIdx === sequence.length) {
        let nextSearch = now.year;
        if (now.term === 3) {
            ++nextSearch;
        }

        return `Actively Seeking ${nextSearch} Software Engineering Positions`;
    }

    const nextWork = sequence[workTermIdx];
    return `Contact me for any Inquiries`;
}

export default getStatus;