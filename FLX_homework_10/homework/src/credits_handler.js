function userCard(index) {
  let defaults = {
    'key': index,
    'balance': 100,
    'transactionLimit': 100,
    'historyLogs': []
  };
  const percent = 0.005;

  return {
    getCardOptions() {
      return defaults;
    },
    putCredits(credits) {
      defaults.balance += credits;
      let history = {
        operationType: 'Received credits',
        credits: credits,
        operationTime: new Date().toLocaleString('en-GB')
      }
      defaults.historyLogs.push(history);
    },
    takeCredits(credits) {
      if (credits <= defaults.balance && credits <= defaults.transactionLimit) {
        defaults.balance -= credits;
        let history = {
          operationType: 'Withdrawal of credits',
          credits: credits,
          operationTime: new Date().toLocaleString('en-GB')
        }
        defaults.historyLogs.push(history);
      } else {
        console.error(credits > defaults.transactionLimit ?
          `Transaction limit was reached` : `The amount of input is bigger than current balance`);
      }
    },
    setTransactionLimit(credits) {
      defaults.transactionLimit = credits;
      let history = {
        operationType: 'Transaction limit change',
        credits: credits,
        operationTime: new Date().toLocaleString('en-GB')
      }
      defaults.historyLogs.push(history);
    },
    transferCredits(credits, card) {
      let tax = credits * percent;
      if (credits <= defaults.balance && credits <= defaults.transactionLimit) {
        this.takeCredits(credits + tax);
        card.putCredits(credits);
      } else {
        console.error(credits > defaults.transactionLimit ?
          `Transaction limit was reached` : `The amount of input is bigger than current balance`);
      }
    }
  }
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.length = 3;
  }
  addCard() {
    if (this.cards.length < this.length) {
      this.cards.push(userCard(this.cards.length + 1));
    }
  }
  getCardByKey(key) {
    return this.cards[key - 1];
  }
}
