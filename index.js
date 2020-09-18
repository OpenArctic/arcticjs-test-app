var arctic = require('arcticjs');

// test

setInterval(function () { }, 0);

(async () => {
    try {
        var agent = arctic.create_client_agent(3, []);

        global.myinstance = myinstance = {};
        myinstance.foo = "bar";
        myinstance.func = function (addon_value) {

            console.log("func has been called.(" + addon_value + ")");
        }

        agent.export("myinstance", global.myinstance);
        var res = agent.start();
        console.log("res = " + res);
        if (res != 0) {
            return;
        }

        var instance = await agent.find(3, "myinstance");
        console.log("myinstance.foo = " + await instance.getProperty("foo"));

        var xxx = await instance.setProperty("aaa", 123321);
        console.log("myinstance.aaa = ", await instance.getProperty("aaa"));
        instance.invoke("func", "hohohho");
        var one = function () {

            console.log("one event has been fired.");
        }
        var two = function () {

            console.log("one event has been fired.");
        }
        instance.addEventListener("one", one);
        instance.removeEventListener("one", two);
        instance.fireEvent("one");

        var x = agent.getRoutingId();
    } catch (e) {
        console.log(e);
    }
})();
