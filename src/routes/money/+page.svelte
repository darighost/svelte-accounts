<script lang="ts">
    let joeBalance: number = 0;
    let yourBalance: number = 0;
    let amount = 0;

    setInterval(async () => {
        const res = await fetch('http://localhost:5555/deposit');
        const { you, joe } = await res.json();
        joeBalance = joe;
        yourBalance = you;
    }, 2000)

    const sendMoney = () => {
        fetch('http://localhost:5555/deposit', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ you: yourBalance - amount, joe: joeBalance + amount })
        })
        amount = 0;
    }
</script>

<div class="center">
    <h1>Send Money</h1>
    <form on:submit|preventDefault={sendMoney}>
        Joe's balance: {joeBalance}<br />
        Your balance: {yourBalance}<p />
        How much money to send Joe.<p />
        <input type="hidden" name="sender" value="you" />
        <input type="hidden" name="recipient" value="joe" />
        Payment: <input style="width: 40px" type="number" bind:value={amount} />
        <input type="submit" value="Send" />
    </form>
</div>

<style>
    .center {
        font-size: large;
        margin: auto;
        width: 35%;
        border: 3px solid #73AD21;
        padding: 15px;
    }
</style>