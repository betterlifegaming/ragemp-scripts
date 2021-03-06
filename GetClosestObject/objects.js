const player = mp.players.local;

exports.checkLocalObjectsFirst = function(player) {
    // GasPumps
    var fuel04Obj = mp.game.joaat("prop_gas_pump_1d");
    var fuel05Obj = mp.game.joaat("prop_gas_pump_old3");
    var fuel06Obj = mp.game.joaat("prop_gas_pump_old2");
    var fuelflight = mp.game.joaat("prop_ind_deiseltank");
    // Locker
    var locker01Obj = mp.game.joaat("p_cs_locker_01");
    var locker02Obj = mp.game.joaat("p_cs_locker_01_s");
    var locker03Obj = mp.game.joaat("p_cs_locker_02");
    // Drink Soda
    var drinkSoda02Obj = mp.game.joaat("prop_vend_soda_02");
    var drinkSoda01Obj = mp.game.joaat("prop_vend_soda_01");
    // Water Vending Machine
    var drinkWater01Obj = mp.game.joaat("prop_watercooler");
    var drinkWater02Obj = mp.game.joaat("prop_watercooler_dark");
    // Donut Vending Machine
    var donut01Obj = mp.game.joaat("v_ret_247_donuts");
    // Coffee Vending Machine
    var coffeeObj = mp.game.joaat("prop_vend_coffe_01");

    var atm1 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, 3424098598, false, true, true);
    var atm2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, 3168729781, false, true, true);
    var atm3 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, 2930269768, false, true, true);
    var atm4 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, 506770882, false, true, true);

    var fuel1 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, 1339433404, false, true, true);
    var fuel2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, 1694452750, false, true, true);
    var fuel3 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, 1933174915, false, true, true);
    var fuel4 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, fuel04Obj, false, true, true);
    var fuel5 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, fuel05Obj, false, true, true);
    var fuel6 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, fuel06Obj, false, true, true);

    var fuelflight = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 5, fuelflight, false, true, true);

    var drinkSoda1 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.5, drinkSoda01Obj, false, true, true);
    var drinkSoda2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.5, drinkSoda02Obj, false, true, true);
    var drinkSoda3 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.5, 992069095, false, true, true);
    var drinkSoda4 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.5, 1114264700, false, true, true);

    var water1 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, drinkWater01Obj, false, true, true);
    var water2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, drinkWater02Obj, false, true, true);
    var water3 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, 1099892058, false, true, true);
    var water4 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, -742198632, false, true, true);

    var donut = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, donut01Obj, false, true, true);
    var snack1 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, -1034034125, false, true, true);
    var snack2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, -654402915, false, true, true);

    var coffee = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, coffeeObj, false, true, true);
    var coffee2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, 690372739, false, true, true);

    var cigarettes = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, 73774428, false, true, true);

    var dump1 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, -58485588, false, true, true);
    var dump2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 666561306, false, true, true);
    var dump3 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 1511880420, false, true, true);
    var dump4 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, -206690185, false, true, true);
    var dump5 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 218085040, false, true, true);
    var dump6 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 1437508529, false, true, true);
    var dump7 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 4236481708, false, true, true);
    var dump8 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 1614656839, false, true, true);
    var dump9 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 4164154385, false, true, true);
    var dump10 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 651101403, false, true, true);
    var dump11 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 3198190107, false, true, true);
    var dump12 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 1143474856, false, true, true);
    var dump13 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 3826337632, false, true, true);
    var dump14 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 2198842852, false, true, true);
    var dump15 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 3965551402, false, true, true);

    //Slot Maschinen
    var slot1 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 2362925439, false, true, true);
    var slot2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 2775323096, false, true, true);
    var slot3 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 3863977906, false, true, true);
    var slot4 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 654385216, false, true, true);
    var slot5 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 161343630, false, true, true);
    var slot6 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 1096374064, false, true, true);
    var slot7 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 207578973, false, true, true);
    var slot8 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 3807744938, false, true, true);
    var special = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, 3802829770, false, true, true);

    if (atm1 || atm2 || atm3 || atm4) {
        return "atm";
    } else if (fuel1 || fuel2 || fuel3 || fuel4 || fuel5 || fuel6) {
        return "gas";
    } else if (drinkSoda1 || drinkSoda2 || drinkSoda3 || drinkSoda4) {
        return "drinks";
    } else if (coffee || coffee2) {
        return "coffee";
    } else if (water1 || water2 || water3 || water4) {
        return "water";
    } else if (donut) {
        return "donut";
    } else if (dump1 || dump2 || dump3 || dump4 || dump5 || dump7) {
        return "dump";
    } else if (dump6 || dump8 || dump9 || dump10 || dump11 || dump12 || dump13 || dump14 || dump15) {
        return "dumpsmall";
    } else if (snack1 || snack2) {
        return "snack";
    } else if (cigarettes) {
        return "kippen";
    } else if (special) {
        return "special";
    } else if (fuelflight) {
        return "fuelflight";
    } else if (slot1 || slot2 || slot3 || slot4 || slot5 || slot6 || slot7 || slot8) {
        return "slots";
    }
    return false;
};
