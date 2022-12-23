var liq1 = 0,
    liq2 = 0;
function updateQuali(e, a) {
    var d = Array(
        "Mínima do Cargo",
        "Fundamental Completo",
        "Médio Completo",
        "Médio Técnico",
        "Graduação Completa",
        "Especialização",
        "Mestrado",
        "Doutorado"
    ),
        u = Array(0, 1, 2, 3, 4, 5, 6, 7),
        l = Array(),
        r = Array(),
        n = e.ddQuali.value,
        a = parseFloat(a);
    for (
        a <= 11
            ? ((l = d), (r = u))
            : 17 == a
                ? ((l = d.slice(2, d.length)),
                    (r = u.slice(2, d.length)),
                    l.splice(0, 1, "Exigência Mínima"),
                    r.splice(0, 1, 0))
                : 31 == a &&
                ((l = d.slice(4, d.length)),
                    (r = u.slice(4, d.length)),
                    l.splice(0, 1, "Exigência Mínima"),
                    r.splice(0, 1, 0));
        e.ddQuali.options.length;

    )
        e.ddQuali.options[0] = null;
    for (i = 0; i < l.length; i++)
        (option = new Option(l[i], r[i])),
            (e.ddQuali.options[e.ddQuali.length] = option);
    r.includes(parseInt(n)) && (e.ddQuali.value = n), calcSalario(e);
}
function calcfatorpg(e, a) {
    Array();
    return (
        a
            ? Array(0, 0.1, 0.15, 0.2, 0.25, 0.3, 0.52, 0.75)
            : Array(0, 0, 0, 0.1, 0.15, 0.2, 0.35, 0.5)
    )[e];
}
function firstload() {
    updateQuali(myform, 1), updateQuali(myform2, 1);
}
function validateGD1(e, a) {
    var d = e || window.event,
        e = d.keyCode || d.which,
        e = String.fromCharCode(e);
    /[0-9]|\./.test(e) ||
        ((d.returnValue = !1), d.preventDefault && d.preventDefault());
}
function validateGD2(e) {
    var a =
        99 < (a = e.gastoTrans.value)
            ? a.toString().substring(0, a.length - 1)
            : parseInt(a, 10);
    (e.gastoTrans.value = a), calcSalario(e);
}
function formatValor(e) {
    var a = /^\d+$/;
    return 0 === e
        ? "R$ 0,00"
        : a.test(e)
            ? "R$ " + e + ",00"
            : a.test(10 * e)
                ? "R$ " + e.toString().replace(".", ",") + "0"
                : "R$ " + e.toString().replace(".", ",");
}
function valorIRRF(e, a) {
    var d = 0,
        d =
            1 == a
                ? e < 1710.79
                    ? 0
                    : e < 2563.92
                        ? 0.075 * e - 128.31
                        : e < 3418.6
                            ? 0.15 * e - 320.6
                            : e < 4271.59
                                ? 0.225 * e - 577
                                : 0.275 * e - 790.58
                : a <= 4
                    ? e <= 1787.77
                        ? 0
                        : e <= 2679.29
                            ? 0.075 * e - 134
                            : e <= 3572.43
                                ? 0.15 * e - 335
                                : e <= 4463.81
                                    ? 0.225 * e - 602.96
                                    : 0.275 * e - 826.15
                    : e <= 1903.98
                        ? 0
                        : e <= 2826.65
                            ? 0.075 * e - 142.8
                            : e <= 3751.05
                                ? 0.15 * e - 354.8
                                : e <= 4664.68
                                    ? 0.225 * e - 636.13
                                    : 0.275 * e - 869.36;
    return Math.floor(100 * d) / 100;
}
function calcPSS(e, a, d) {
    var u = 0,
        u =
            e < 12
                ? 0.11 * a
                : 12 == e
                    ? a <= 1045
                        ? 0.075 * a
                        : a <= 2089.6
                            ? 0.09 * a - 15.68
                            : a <= 3134.4
                                ? 0.12 * a - 78.36
                                : a <= 6101.06
                                    ? 0.14 * a - 141.05
                                    : a <= 10448
                                        ? 0.145 * a - 171.56
                                        : a <= 20896.2
                                            ? 0.165 * a - 380.52
                                            : a <= 40474.2
                                                ? 0.19 * a - 902.92
                                                : 0.22 * a - 2117.14
                    : 13 == e
                        ? a <= 1100
                            ? 0.075 * a
                            : a <= 2203.48
                                ? 0.09 * a - 16.5
                                : a <= 3305.22
                                    ? 0.12 * a - 82.6
                                    : a <= 6433.57
                                        ? 0.14 * a - 148.7
                                        : a <= 11017.42
                                            ? 0.145 * a - 180.87
                                            : a <= 22034.83
                                                ? 0.165 * a - 401.22
                                                : a <= 42967.92
                                                    ? 0.19 * a - 952.09
                                                    : 0.22 * a - 2241.13
                        : a <= 1212
                            ? 0.075 * a
                            : a <= 2427.35
                                ? 0.09 * a - 18.18
                                : a <= 3641.04
                                    ? 0.12 * a - 91
                                    : a <= 7087.23
                                        ? 0.14 * a - 163.82
                                        : a <= 12136.8
                                            ? 0.145 * a - 199.26
                                            : a <= 24273.58
                                                ? 0.165 * a - 441.99
                                                : a <= 47333.46
                                                    ? 0.19 * a - 1048.83
                                                    : 0.22 * a - 2468;
    return Math.floor(100 * u) / 100;
}
function dependentesIR(e, a) {
    var d = 0,
        d = 1 == a ? 171.97 * e : a <= 4 ? 179.71 * e : 189.59 * e;
    return Math.floor(100 * d) / 100;
}
function valorSaude(e, a, d) {
    var u = Array();
    (u[0] = Array(
        121.94,
        127.69,
        129.42,
        134.6,
        138.62,
        143.22,
        154.98,
        157.44,
        159.9,
        167.7
    )),
        (u[1] = Array(
            116.19,
            121.94,
            123.67,
            127.69,
            131.72,
            136.32,
            147.42,
            149.76,
            152.1,
            159.9
        )),
        (u[2] = Array(
            110.44,
            116.19,
            117.92,
            121.94,
            125.97,
            130.57,
            139.86,
            142.08,
            144.3,
            152.1
        )),
        (u[3] = Array(
            105.84,
            110.44,
            112.16,
            116.19,
            120.22,
            124.82,
            133.56,
            135.68,
            137.8,
            144.3
        )),
        (u[4] = Array(
            100.08,
            105.84,
            107.56,
            110.44,
            114.46,
            119.07,
            127.26,
            129.28,
            131.3,
            137.8
        )),
        (u[5] = Array(
            90.88,
            93.18,
            94.91,
            95.48,
            99.51,
            104.11,
            105.84,
            107.52,
            109.2,
            111.8
        )),
        (u[6] = Array(
            87.43,
            88.58,
            90.31,
            90.88,
            94.91,
            99.51,
            100.8,
            102.4,
            104,
            106.6
        )),
        (u[7] = Array(
            82.83,
            83.98,
            85.7,
            86.28,
            90.31,
            94.91,
            95.76,
            97.28,
            98.8,
            101.4
        ));
    var l = 0,
        l =
            e < 1500
                ? 0
                : e < 2e3
                    ? 1
                    : e < 2500
                        ? 2
                        : e < 3e3
                            ? 3
                            : e < 4e3
                                ? 4
                                : e < 5500
                                    ? 5
                                    : e < 7500
                                        ? 6
                                        : 7,
        d = 6 <= d ? 1.22618 : 1;
    return 1e3 == a ? 0 : Math.round(u[l][a] * d * 100) / 100;
}
function valorCreche(e, a, d) {
    var u = 95;
    6 <= a && (u = 321);
    return (
        u *
        (1 -
            (e < 6200.8
                ? 0.05
                : e < 12401.6
                    ? 0.1
                    : e < 18602.4
                        ? 0.15
                        : e < 24803.2
                            ? 0.2
                            : 0.25)) *
        d
    );
}
function valorTransporte(e, a) {
    var d;
    return (
        (gastodiario = isNaN(a) || a < 0 ? 0 : 0.2 * Math.ceil((a - 1) / 0.2) + 1),
        (d = 22 * gastodiario - 0.06 * e * (22 / 30)) < 0 ? 0 : d
    );
}
function valorFG(e, a) {
    var d = Array(
        0,
        777.26,
        522.9,
        423.94,
        215.78,
        175.09,
        128.4,
        81.89,
        60.57,
        49.15
    ),
        u = Array(
            0,
            790.75,
            531.99,
            431.3,
            219.54,
            187.14,
            130.63,
            83.31,
            61.61,
            50
        ),
        l = Array(
            0,
            804.49,
            541.23,
            438.79,
            223.35,
            181.23,
            132.89,
            84.75,
            62.69,
            50.86
        ),
        r = Array(
            0,
            848.74,
            571,
            462.92,
            235.63,
            191.2,
            140.2,
            89.41,
            66.14,
            53.66
        ),
        n = Array(
            0,
            891.17,
            599.55,
            486.07,
            247.42,
            200.76,
            147.21,
            93.88,
            69.44,
            56.34
        ),
        t = Array(
            0,
            933.5,
            628.03,
            509.16,
            259.17,
            210.29,
            154.2,
            98.34,
            72.74,
            59.02
        ),
        o = Array(
            0,
            975.51,
            656.29,
            532.07,
            270.83,
            219.76,
            161.14,
            101.77,
            76.02,
            61.67
        ),
        v = 0;
    return (
        1 == a
            ? (v = d[e])
            : a <= 2
                ? (v = u[e])
                : a <= 6
                    ? (v = l[e])
                    : 7 == a
                        ? (v = r[e])
                        : 8 == a
                            ? (v = n[e])
                            : 9 == a
                                ? (v = t[e])
                                : 10 <= a && (v = o[e]),
        v
    );
}
function valorCD(e, a) {
    var d = Array(0, 9575.95, 8004.9, 9284.22, 4563.53),
        u = Array(0, 10315.37, 8623.02, 6769.47, 4915.92),
        l = Array(0, 11111.9, 9288.86, 7292.19, 5295.51),
        r = Array(0, 11723.05, 9799.75, 7693.26, 5586.77),
        n = Array(0, 12309.21, 10289.74, 8077.92, 5866.1),
        t = Array(0, 12893.89, 10778.5, 8461.62, 6144.74),
        o = Array(0, 13474.12, 11263.53, 8842.29, 6421.26);
    return (
        1 == a
            ? d
            : a <= 3
                ? u
                : a <= 6
                    ? l
                    : 7 == a
                        ? r
                        : 8 == a
                            ? n
                            : 9 == a
                                ? t
                                : o
    )[e];
}
function nocd(e) {
    0 != e.ddFG.value && (e.ddCD.value = 0);
}
function nofg(e) {
    0 != e.ddCD.value && (e.ddFG.value = 0);
}
function calcSalario(e) {
    var a = parseInt(e.ddAno.value, 10);
    (base =
        1 == a
            ? ((ftstep = 1.036), 1086.32)
            : 2 == a
                ? ((ftstep = 1.037), 1086.32)
                : 3 == a
                    ? ((ftstep = 1.037), 1140.64)
                    : 4 == a
                        ? ((ftstep = 1.038), 1140.64)
                        : 5 == a || 6 == a
                            ? ((ftstep = 1.038), 1197.67)
                            : 7 == a
                                ? ((ftstep = 1.038), 1263.54)
                                : 7 < a && a < 15
                                    ? ((ftstep = 1.039), 1326.72)
                                    : ((ftstep = 1.039), 1446.1248)),
        e.medico.checked && (base *= 2);
    var d =
        parseFloat(e.ddClasse.value) +
        parseFloat(e.ddNivel.value) +
        parseFloat(e.ddProg.value) -
        3,
        u = e.ddCargaH.value,
        l = Math.floor(base * Math.pow(ftstep, d) * u * 100) / 100,
        r = (e.numAnuenio.value / 100) * l,
        n = 0,
        n = a < 6 ? (e.alim.checked ? 373 : 0) : e.alim.checked ? 458 : 0;
    0.5 == u && (n /= 2);
    var t = e.trans.checked ? valorTransporte(l, e.gastoTrans.value) : 0,
        o = e.ddInsa.value,
        v = calcfatorpg(e.ddQuali.value, e.areaquali[0].checked),
        c = 0;
    1 == e.ddURP.value
        ? (e.numURP.disabled && (e.numURP.disabled = !1),
            (c = parseFloat(e.numURP.value)))
        : 2 == e.ddURP.value
            ? ((e.numURP.disabled = !0), (c = 0.2605 * l * (1 + v)))
            : (e.numURP.disabled = !0);
    var i = v * l,
        s = l + c + i + Math.floor(o * l * 100) / 100 + r,
        m = 0;
    e.sindicato.checked &&
        (m =
            "vb" == e.ddSindTipo.value
                ? 0.01 * l
                : "rem" == e.ddSindTipo.value
                    ? 0.01 * s
                    : Math.floor(
                        0.01 *
                        base *
                        Math.pow(ftstep, parseFloat(e.ddClasse.value) - 1) *
                        u *
                        100
                    ) / 100);
    var p,
        h,
        f,
        k = (s / (240 * u)) * (e.noturno.value * (60 / 52.5)) * 0.25,
        I = valorFG(parseInt(e.ddFG.value, 10), a),
        D =
            s +
            I +
            (p =
                e.rdCD[0].checked && "0" != e.ddCD.value
                    ? 0.6 * valorCD(e.ddCD.value, a)
                    : e.rdCD[1].checked && "0" != e.ddCD.value
                        ? valorCD(e.ddCD.value, a) - l
                        : 0),
        C = e.saude.checked
            ? valorSaude(D, parseInt(e.ddIdade.value, 10), a) +
            valorSaude(D, parseInt(e.ddIdadeDep1.value, 10), a) +
            valorSaude(D, parseInt(e.ddIdadeDep2.value, 10), a) +
            valorSaude(D, parseInt(e.ddIdadeDep3.value, 10), a)
            : 0,
        g = valorCreche(
            l + c + Math.floor(o * l * 100) / 100 + r,
            a,
            e.numCreche.value
        );
    f = e.ferias.checked ? valorIRRF((h = (s + I + p) / 3), a) : (h = 0);
    var A = e.decter.checked ? (s + I + p) / 2 : 0,
        y = s + C + n + t + g + I + p + k + h + A,
        F = s,
        d = 4663.75,
        d =
            6 == a || 7 == a
                ? 5189.82
                : 8 == a
                    ? 5531.31
                    : 9 == a
                        ? 5645.81
                        : 10 == a
                            ? 5839.45
                            : 11 == a || 12 == a
                                ? 6101.06
                                : 13 == a
                                    ? 6433.57
                                    : 7087.23;
    e.pssfgcd.checked && (F += I + p),
        "rpc" == e.novopss.value && d < F && (F = d);
    (v = calcPSS(a, F, d)), (u = 0);
    "sim" == e.funp_ad.value &&
        (F == d
            ? ((R = l + c + i - d),
                e.pssfgcd.checked && (R += I + p),
                (u = R * e.ddFunp.value),
                "myform" == e.name
                    ? ((document.getElementById("funp_plano_norm1").checked = !0),
                        (document.getElementById("ddFunp1").disabled = !1),
                        (document.getElementById("numFunpAlt1").disabled = !0))
                    : ((document.getElementById("funp_plano_norm2").checked = !0),
                        (document.getElementById("ddFunp2").disabled = !1),
                        (document.getElementById("numFunpAlt2").disabled = !0)))
            : ((u = e.numFunpAlt.value),
                "myform" == e.name
                    ? ((document.getElementById("funp_plano_alt1").checked = !0),
                        (document.getElementById("ddFunp1").disabled = !0),
                        (document.getElementById("numFunpAlt1").disabled = !1))
                    : ((document.getElementById("funp_plano_alt2").checked = !0),
                        (document.getElementById("ddFunp2").disabled = !0),
                        (document.getElementById("numFunpAlt2").disabled = !1))));
    var D = dependentesIR(e.numDepIRRF.value, a),
        r = l + c + i + o * l + I + p - v - u - D,
        s = valorIRRF(r, a),
        d = e.decter.checked && "2" == e.decter_par.value ? s + v + u : 0,
        R = Math.round(100 * (y - s - v - u - d - m - f)) / 100 - e.numOutros.value;
    "myform" == e.name ? (liq1 = R) : (liq2 = R),
        (document.getElementById("diffLiqAbs").value = formatValor(
            Math.abs(Math.round(100 * (liq1 - liq2)) / 100)
        )),
        (document.getElementById("diffLiqPor").value =
            Math.round((100 * liq2) / liq1) + "%"),
        (e.txVB.value = formatValor(l)),
        (e.txResult.value = formatValor(R)),
        (e.txInsa.value = formatValor(Math.floor(o * l * 100) / 100)),
        (e.txInss.value = formatValor(Math.round(100 * v) / 100)),
        (e.txBruto.value = formatValor(Math.round(100 * y) / 100)),
        (e.txIrrf.value = formatValor(Math.round(100 * s) / 100)),
        (e.txSaude.value = formatValor(C)),
        (e.txTrans.value = formatValor(Math.round(100 * t) / 100)),
        (e.txAlim.value = formatValor(n)),
        (e.txCreche.value = formatValor(Math.round(100 * g) / 100)),
        (e.txURP.value = formatValor(Math.round(100 * c) / 100)),
        (e.txbIRRF.value = formatValor(Math.round(100 * r) / 100)),
        (e.txbINSS.value = formatValor(Math.round(100 * F) / 100)),
        (e.txdesconto.value = formatValor(Math.round(100 * (y - R)) / 100)),
        (e.txSindicato.value = formatValor(Math.round(100 * m) / 100)),
        (e.txQualif.value = formatValor(Math.round(100 * i) / 100)),
        (e.txFunp.value = formatValor(Math.round(100 * u) / 100)),
        (e.txDepIRRF.value = formatValor(D)),
        (e.txFG.value = formatValor(I)),
        (e.txCD.value = e.rdCD[0].checked
            ? formatValor(Math.round(100 * p) / 100)
            : formatValor(valorCD(e.ddCD.value, a))),
        (e.txNoturno.value = formatValor(Math.round(100 * k) / 100)),
        (e.txFerias.value = formatValor(Math.round(100 * h) / 100)),
        (e.txIrrfFerias.value = formatValor(Math.round(100 * f) / 100)),
        (e.txDecter.value = formatValor(Math.round(100 * A) / 100)),
        (e.txDesc13.value = formatValor(Math.round(100 * d) / 100)),
        saveStorage();
}
function inverterform(e) {
    var a,
        d,
        u = document.forms.myform,
        l = document.forms.myform2;
    "inverter" == e
        ? ((a = Array(
            u.ddClasse.value,
            u.ddProg.value,
            u.ddFG.value,
            u.ddNivel.value,
            u.ddCargaH.value,
            u.ddAno.value,
            u.ddQuali.value,
            u.saude.checked,
            u.ddIdade.value,
            u.ddURP.value,
            u.trans.checked,
            u.gastoTrans.value,
            u.alim.checked,
            u.ddInsa.value,
            u.numCreche.value,
            u.sindicato.checked,
            u.areaquali[0].checked,
            u.areaquali[1].checked,
            u.novopss.value,
            u.ddFunp.value,
            u.numAnuenio.value,
            u.funp_ad.value,
            u.numFunpAlt.value,
            u.numDepIRRF.value,
            u.ddIdadeDep1.value,
            u.ddIdadeDep2.value,
            u.ddIdadeDep3.value,
            u.ddCD.value,
            u.rdCD[0].checked,
            u.rdCD[1].checked,
            u.ferias.checked,
            u.decter.checked,
            u.decter_par.value,
            u.ddSindTipo.value,
            0,
            u.numOutros.value,
            u.numURP.value
        )),
            (d = Array(
                l.ddClasse.value,
                l.ddProg.value,
                l.ddFG.value,
                l.ddNivel.value,
                l.ddCargaH.value,
                l.ddAno.value,
                l.ddQuali.value,
                l.saude.checked,
                l.ddIdade.value,
                l.ddURP.value,
                l.trans.checked,
                l.gastoTrans.value,
                l.alim.checked,
                l.ddInsa.value,
                l.numCreche.value,
                l.sindicato.checked,
                l.areaquali[0].checked,
                l.areaquali[1].checked,
                l.novopss.value,
                l.ddFunp.value,
                l.numAnuenio.value,
                l.funp_ad.value,
                l.numFunpAlt.value,
                l.numDepIRRF.value,
                l.ddIdadeDep1.value,
                l.ddIdadeDep2.value,
                l.ddIdadeDep3.value,
                l.ddCD.value,
                l.rdCD[0].checked,
                l.rdCD[1].checked,
                l.ferias.checked,
                l.decter.checked,
                l.decter_par.value,
                l.ddSindTipo.value,
                0,
                l.numOutros.value,
                l.numURP.value
            )))
        : "cima" == e
            ? (a = d =
                Array(
                    l.ddClasse.value,
                    l.ddProg.value,
                    l.ddFG.value,
                    l.ddNivel.value,
                    l.ddCargaH.value,
                    l.ddAno.value,
                    l.ddQuali.value,
                    l.saude.checked,
                    l.ddIdade.value,
                    l.ddURP.value,
                    l.trans.checked,
                    l.gastoTrans.value,
                    l.alim.checked,
                    l.ddInsa.value,
                    l.numCreche.value,
                    l.sindicato.checked,
                    l.areaquali[0].checked,
                    l.areaquali[1].checked,
                    l.novopss.value,
                    l.ddFunp.value,
                    l.numAnuenio.value,
                    l.funp_ad.value,
                    l.numFunpAlt.value,
                    l.numDepIRRF.value,
                    l.ddIdadeDep1.value,
                    l.ddIdadeDep2.value,
                    l.ddIdadeDep3.value,
                    l.ddCD.value,
                    l.rdCD[0].checked,
                    l.rdCD[1].checked,
                    l.ferias.checked,
                    l.decter.checked,
                    l.decter_par.value,
                    l.ddSindTipo.value,
                    0,
                    l.numOutros.value,
                    l.numURP.value
                ))
            : (d = a =
                Array(
                    u.ddClasse.value,
                    u.ddProg.value,
                    u.ddFG.value,
                    u.ddNivel.value,
                    u.ddCargaH.value,
                    u.ddAno.value,
                    u.ddQuali.value,
                    u.saude.checked,
                    u.ddIdade.value,
                    u.ddURP.value,
                    u.trans.checked,
                    u.gastoTrans.value,
                    u.alim.checked,
                    u.ddInsa.value,
                    u.numCreche.value,
                    u.sindicato.checked,
                    u.areaquali[0].checked,
                    u.areaquali[1].checked,
                    u.novopss.value,
                    u.ddFunp.value,
                    u.numAnuenio.value,
                    u.funp_ad.value,
                    u.numFunpAlt.value,
                    u.numDepIRRF.value,
                    u.ddIdadeDep1.value,
                    u.ddIdadeDep2.value,
                    u.ddIdadeDep3.value,
                    u.ddCD.value,
                    u.rdCD[0].checked,
                    u.rdCD[1].checked,
                    u.ferias.checked,
                    u.decter.checked,
                    u.decter_par.value,
                    u.ddSindTipo.value,
                    0,
                    u.numOutros.value,
                    u.numURP.value
                )),
        (u.ddClasse.value = d[0]),
        (u.ddProg.value = d[1]),
        (u.ddFG.value = d[2]),
        (u.ddNivel.value = d[3]),
        (u.ddCargaH.value = d[4]),
        (u.ddAno.value = d[5]),
        (u.saude.checked = d[7]),
        (u.ddIdade.value = d[8]),
        (u.ddURP.value = d[9]),
        (u.trans.checked = d[10]),
        (u.gastoTrans.value = d[11]),
        (u.alim.checked = d[12]),
        (u.ddInsa.value = d[13]),
        (u.numCreche.value = d[14]),
        (u.sindicato.checked = d[15]),
        (u.areaquali[0].checked = d[16]),
        (u.areaquali[1].checked = d[17]),
        (u.novopss.value = d[18]),
        (u.ddFunp.value = d[19]),
        (u.numAnuenio.value = d[20]),
        (u.funp_ad.value = d[21]),
        (u.numFunpAlt.value = d[22]),
        (u.numDepIRRF.value = d[23]),
        (u.ddIdadeDep1.value = d[24]),
        (u.ddIdadeDep2.value = d[25]),
        (u.ddIdadeDep3.value = d[26]),
        (u.ddCD.value = d[27]),
        (u.rdCD[0].checked = d[28]),
        (u.rdCD[1].checked = d[29]),
        (u.ferias.checked = d[30]),
        (u.decter.checked = d[31]),
        (u.decter_par.value = d[32]),
        (u.ddSindTipo.value = d[33]),
        (u.numOutros.value = d[35]),
        (u.numURP.value = a[36]),
        (l.ddClasse.value = a[0]),
        (l.ddProg.value = a[1]),
        (l.ddFG.value = a[2]),
        (l.ddNivel.value = a[3]),
        (l.ddCargaH.value = a[4]),
        (l.ddAno.value = a[5]),
        (l.saude.checked = a[7]),
        (l.ddIdade.value = a[8]),
        (l.ddURP.value = a[9]),
        (l.trans.checked = a[10]),
        (l.gastoTrans.value = a[11]),
        (l.alim.checked = a[12]),
        (l.ddInsa.value = a[13]),
        (l.numCreche.value = a[14]),
        (l.sindicato.checked = a[15]),
        (l.areaquali[0].checked = a[16]),
        (l.areaquali[1].checked = a[17]),
        (l.novopss.value = a[18]),
        (l.ddFunp.value = a[19]),
        (l.numAnuenio.value = a[20]),
        (l.funp_ad.value = a[21]),
        (l.numFunpAlt.value = a[22]),
        (l.numDepIRRF.value = a[23]),
        (l.ddIdadeDep1.value = a[24]),
        (l.ddIdadeDep2.value = a[25]),
        (l.ddIdadeDep3.value = a[26]),
        (l.ddCD.value = a[27]),
        (l.rdCD[0].checked = a[28]),
        (l.rdCD[1].checked = a[29]),
        (l.ferias.checked = a[30]),
        (l.decter.checked = a[31]),
        (l.decter_par.value = a[32]),
        (l.ddSindTipo.value = a[33]),
        (l.numOutros.value = a[35]),
        (l.numURP.value = a[36]),
        updateQuali(u, d[0]),
        updateQuali(l, a[0]),
        (u.ddQuali.value = d[6]),
        (l.ddQuali.value = a[6]),
        calcSalario(u),
        calcSalario(l);
}
