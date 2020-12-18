!(function (B, i) {
  "use strict";
  var t,
    r,
    E,
    c,
    a = "commento",
    m = "commento-main-area",
    d = "commento-login",
    T = "commento-login-box-container",
    H = "commento-login-box",
    C = "commento-login-box-email-subtitle",
    L = "commento-login-box-email-input",
    u = "commento-login-box-password-input",
    p = "commento-login-box-name-input",
    v = "commento-login-box-website-input",
    M = "commento-login-box-email-button",
    S = "commento-login-box-forgot-link-container",
    N = "commento-login-box-login-link-container",
    D = "commento-login-box-sso-pretext",
    A = "commento-login-box-sso-buttton-container",
    R = "commento-login-box-hr1",
    O = "commento-login-box-oauth-pretext",
    I = "commento-login-box-oauth-buttons-container",
    P = "commento-login-box-hr2",
    l = "commento-mod-tools",
    n = "commento-mod-tools-lock-button",
    s = "commento-error",
    f = "commento-logged-container",
    h = "commento-pre-comments-area",
    g = "commento-comments-area",
    k = "commento-textarea-super-container-",
    x = "commento-textarea-container-",
    b = "commento-textarea-",
    w = "commento-anonymous-checkbox-",
    y = "commento-sort-policy-",
    U = "commento-comment-card-",
    q = "commento-comment-body-",
    j = "commento-comment-text-",
    W = "commento-comment-subtitle-",
    Y = "commento-comment-timeago-",
    _ = "commento-comment-score-",
    F = "commento-comment-options-",
    J = "commento-comment-edit-",
    V = "commento-comment-reply-",
    X = "commento-comment-collapse-",
    z = "commento-comment-upvote-",
    G = "commento-comment-downvote-",
    $ = "commento-comment-approve-",
    K = "commento-comment-remove-",
    Q = "commento-comment-sticky-",
    Z = "commento-comment-children-",
    ee = "commento-comment-contents-",
    oe = "commento-comment-name-",
    ne = "commento-submit-button-",
    te = "commento-markdown-button-",
    ie = "commento-markdown-help-",
    re = "https://commento.io",
    ce = "https://cdn.commento.io",
    ae = null,
    me = parent.location.pathname,
    de = !1,
    le = [],
    se = {},
    ue = {},
    pe = !0,
    ve = !1,
    fe = !1,
    he = !1,
    ge = !1,
    xe = "none",
    be = {},
    we = {},
    ye = {},
    ke = !1,
    Te = "login",
    He = !1,
    Ce = "score-desc",
    Le = void 0,
    Me = null;
  function Se(e) {
    return i.getElementById(e);
  }
  function Ne(e, o) {
    e.prepend(o);
  }
  function Be(e, o) {
    e.appendChild(o);
  }
  function Ee(e, o) {
    e.parentNode.insertBefore(o, e.nextSibling);
  }
  function De(e, o) {
    e.classList.add("commento-" + o);
  }
  function Ae(e, o) {
    null !== e && e.classList.remove("commento-" + o);
  }
  function Re(e) {
    return i.createElement(e);
  }
  function Oe(e) {
    null !== e && e.parentNode.removeChild(e);
  }
  function Ie(e, o) {
    var n = e.attributes[o];
    if (void 0 !== n) return n.value;
  }
  function Pe(e) {
    if (null !== e) {
      var o = e.cloneNode(!0);
      if (null !== e.parentNode) return e.parentNode.replaceChild(o, e), o;
    }
    return e;
  }
  function Ue(e, o, n) {
    e.addEventListener(
      "click",
      function () {
        o(n);
      },
      !1
    );
  }
  function qe(e, o, n) {
    e.setAttribute(o, n);
  }
  function je(e, o, n) {
    var t = new XMLHttpRequest();
    t.open("POST", e, !0),
      t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (t.onload = function () {
        n(JSON.parse(t.response));
      }),
      t.send(JSON.stringify(o));
  }
  function We(e) {
    "function" == typeof e && e();
  }
  function Ye(e, o) {
    var n,
      t = new Date();
    t.setTime(t.getTime() + 31536e6),
      (n = "; expires=" + t.toUTCString()),
      (i.cookie = e + "=" + o + n + "; path=/");
  }
  function _e() {
    var e = (function (e) {
      var o = ("; " + i.cookie).split("; " + e + "=");
      if (2 === o.length) return o.pop().split(";").shift();
    })("commentoCommenterToken");
    return void 0 === e ? "anonymous" : e;
  }
  function Fe() {
    window.open(re + "/profile?commenterToken=" + _e(), "_blank");
  }
  function Je(e) {
    window.open(re + "/unsubscribe?unsubscribeSecretHex=" + e, "_blank");
  }
  function Ve(e, o) {
    var n = Re("div");
    return (
      (n.style.background = e),
      (n.innerText = o.toUpperCase()),
      "?" === o && (n.style["font-weight"] = "bold"),
      De(n, "avatar"),
      n
    );
  }
  function Xe(e, o) {
    var n = new Image();
    (n.src = o),
      (n.onload = function () {
        De(n, "avatar-img"),
          (function (e, o) {
            null !== e && null !== o && e.parentNode.replaceChild(o, e);
          })(e, n);
      });
  }
  function ze(e, o) {
    (ue[e.commenterHex] = e), (Le = e.commenterHex);
    var n,
      t,
      i = Re("div"),
      r = Re("div");
    n = "undefined" !== e.link ? Re("a") : Re("div");
    var c = Re("div"),
      a = Re("div"),
      m = Re("div"),
      d = ao(e.commenterHex + "-" + e.name);
    (i.id = f),
      De(i, "logged-container"),
      De(r, "logged-in-as"),
      De(n, "name"),
      De(c, "profile-button"),
      De(a, "profile-button"),
      De(m, "profile-button"),
      (n.innerText = e.name),
      (c.innerText = "Notification Settings"),
      (a.innerText = "Edit Profile"),
      (m.innerText = "Logout"),
      Ue(m, B.logout),
      Ue(c, Je, o.unsubscribeSecretHex),
      Ue(a, Fe),
      qe(i, "style", "display: none"),
      "undefined" !== e.link && qe(n, "href", e.link),
      (t = Ve(d, e.name[0])),
      "undefined" !== e.photo &&
        Xe(t, ce + "/api/commenter/photo?commenterHex=" + e.commenterHex),
      Be(r, t),
      Be(r, n),
      Be(i, r),
      Be(i, m),
      "commento" === e.provider && Be(i, a),
      Be(i, c),
      Ne(ae, i),
      (de = !0);
  }
  function Ge(o) {
    if ("anonymous" === _e()) return (de = !1), void We(o);
    var e = { commenterToken: _e() };
    je(re + "/api/commenter/self", e, function (e) {
      if (!e.success)
        return Ye("commentoCommenterToken", "anonymous"), void We(o);
      ze(e.commenter, e.email), yo(), We(o);
    });
  }
  function $e(e, o) {
    var n = Re("link"),
      t = i.getElementsByTagName("head")[0];
    (n.type = "text/css"),
      qe(n, "href", e),
      qe(n, "rel", "stylesheet"),
      (function (e, o, n) {
        e.addEventListener("load", function () {
          o(n);
        });
      })(n, o),
      Be(t, n);
  }
  function Ke(o) {
    var e = { commenterToken: _e(), domain: parent.location.host, path: me };
    je(re + "/api/comment/list", e, function (e) {
      e.success
        ? (Ze(),
          (pe = e.requireIdentification),
          (ve = e.isModerator),
          (fe = e.isFrozen),
          (ge = e.attributes.isLocked),
          (xe = e.attributes.stickyCommentHex),
          (le = e.comments),
          (ue = Object.assign({}, ue, e.commenters)),
          (ye = e.configuredOauths),
          (Ce = e.defaultSortPolicy),
          We(o))
        : Qe(e.message);
    });
  }
  function Qe(e) {
    var o = Se(s);
    (o.innerText = e), qe(o, "style", "display: block;");
  }
  function Ze() {
    qe(Se(s), "style", "display: none;");
  }
  function eo(e) {
    var o = Se(k + e),
      n = Se(te + e),
      t = Re("table"),
      i = Re("tr"),
      r = Re("td"),
      c = Re("td"),
      a = Re("tr"),
      m = Re("td"),
      d = Re("td"),
      l = Re("tr"),
      s = Re("td"),
      u = Re("td"),
      p = Re("tr"),
      v = Re("td"),
      f = Re("td"),
      h = Re("tr"),
      g = Re("td"),
      x = Re("td"),
      b = Re("tr"),
      w = Re("td"),
      y = Re("td");
    (t.id = ie + e),
      De(t, "markdown-help"),
      (m.innerHTML = "<b>bold</b>"),
      (d.innerHTML = "surround text with <pre>**two asterisks**</pre>"),
      (r.innerHTML = "<i>italics</i>"),
      (c.innerHTML = "surround text with <pre>*asterisks*</pre>"),
      (s.innerHTML = "<pre>code</pre>"),
      (u.innerHTML = "surround text with <pre>`backticks`</pre>"),
      (v.innerHTML = "<strike>strikethrough</strike>"),
      (f.innerHTML = "surround text with <pre>~~two tilde characters~~</pre>"),
      (g.innerHTML = '<a href="https://example.com">hyperlink</a>'),
      (x.innerHTML =
        "<pre>[hyperlink](https://example.com)</pre> or just a bare URL"),
      (w.innerHTML = "<blockquote>quote</blockquote>"),
      (y.innerHTML = "prefix with <pre>&gt;</pre>"),
      Ue((n = Pe(n)), oo, e),
      Be(i, r),
      Be(i, c),
      Be(t, i),
      Be(a, m),
      Be(a, d),
      Be(t, a),
      Be(h, g),
      Be(h, x),
      Be(t, h),
      Be(l, s),
      Be(l, u),
      Be(t, l),
      Be(p, v),
      Be(p, f),
      Be(t, p),
      Be(b, w),
      Be(b, y),
      Be(t, b),
      Be(o, t);
  }
  function oo(e) {
    var o = Se(te + e),
      n = Se(ie + e);
    Ue((o = Pe(o)), eo, e), Oe(n);
  }
  function no(e, o) {
    var n = Re("div"),
      t = Re("div"),
      i = Re("textarea"),
      r = Re("div"),
      c = Re("input"),
      a = Re("label"),
      m = Re("button"),
      d = Re("a");
    return (
      (n.id = k + e),
      (t.id = x + e),
      (i.id = b + e),
      (c.id = w + e),
      (m.id = ne + e),
      (d.id = te + e),
      De(t, "textarea-container"),
      De(r, "round-check"),
      De(r, "anonymous-checkbox-container"),
      De(m, "button"),
      De(m, "submit-button"),
      De(d, "markdown-button"),
      De(n, "button-margin"),
      qe(i, "placeholder", "Add a comment"),
      qe(c, "type", "checkbox"),
      qe(a, "for", w + e),
      (a.innerText = "Comment anonymously"),
      (m.innerText = !0 === o ? "Save Changes" : "Add Comment"),
      (d.innerHTML = "<b>M &#8595;</b> &nbsp; Markdown"),
      ke && ((c.checked = !0), c.setAttribute("disabled", !0)),
      (i.oninput = (function (e) {
        return function () {
          (e.style.height = ""),
            (e.style.height =
              Math.min(Math.max(e.scrollHeight, 75), 400) + "px");
        };
      })(i)),
      Ue(m, !0 === o ? po : go, e),
      Ue(d, eo, e),
      Be(t, i),
      Be(n, t),
      Be(r, c),
      Be(r, a),
      Be(n, m),
      pe || !0 === o || Be(n, r),
      Be(n, d),
      n
    );
  }
  B.logout = function () {
    Ye("commentoCommenterToken", "anonymous"),
      (ve = de = !1),
      (Le = void 0),
      o();
  };
  var to = {
    "score-desc": "Upvotes",
    "creationdate-desc": "Newest",
    "creationdate-asc": "Oldest",
  };
  function io(e) {
    Ae(Se(y + Ce), "sort-policy-button-selected");
    var o = Se(g);
    (o.innerHTML = ""), (Ce = e);
    var n = so(vo(le), "root");
    n && Be(o, n), De(Se(y + e), "sort-policy-button-selected");
  }
  function ro(e) {
    var o = Re("div"),
      n = Re("div"),
      t = Se(m),
      i = Re("div"),
      r = Re("div");
    (o.id = d),
      (i.id = h),
      (r.id = g),
      De(o, "login"),
      De(n, "login-text"),
      De(r, "comments"),
      (n.innerText = "Login"),
      (r.innerHTML = ""),
      Ue(n, B.loginBoxShow, null);
    var c = 0;
    Object.keys(ye).forEach(function (e) {
      ye[e] && c++;
    }),
      0 < c ? Be(o, n) : pe || (ke = !0),
      ge || fe
        ? de || he
          ? (Be(t, co("This thread is locked. You cannot add new comments.")),
            Oe(Se(d)))
          : (Be(t, o), Be(t, no("root")))
        : (de ? Oe(Se(d)) : Be(t, o), Be(t, no("root"))),
      0 < le.length &&
        Be(
          t,
          (function () {
            var e = Re("div"),
              o = Re("div");
            for (var n in (De(e, "sort-policy-buttons-container"),
            De(o, "sort-policy-buttons"),
            to)) {
              var t = Re("a");
              (t.id = y + n),
                De(t, "sort-policy-button"),
                n === Ce && De(t, "sort-policy-button-selected"),
                (t.innerText = to[n]),
                Ue(t, io, n),
                Be(o, t);
            }
            return Be(e, o), e;
          })()
        ),
      Be(t, i),
      Be(t, r),
      Be(ae, t),
      We(e);
  }
  function co(e) {
    var o = Re("div");
    return De(o, "moderation-notice"), (o.innerText = e), o;
  }
  function ao(e) {
    for (
      var o = [
          "#396ab1",
          "#da7c30",
          "#3e9651",
          "#cc2529",
          "#922428",
          "#6b4c9a",
          "#535154",
        ],
        n = 0,
        t = 0;
      t < e.length;
      t++
    )
      n += e.charCodeAt(t);
    return o[n % o.length];
  }
  function mo(e) {
    return 1 !== e ? e + " points" : e + " point";
  }
  B.commentNew = function (r, c, a) {
    var m = Se(k + r),
      d = Se(b + r),
      l = Se(V + r),
      s = d.value;
    if ("" !== s) {
      Ae(d, "red-border");
      var e = {
        commenterToken: c,
        domain: parent.location.host,
        path: me,
        parentHex: r,
        markdown: s,
      };
      je(re + "/api/comment/new", e, function (e) {
        if (e.success) {
          Ze();
          var o = "";
          "unapproved" === e.state
            ? (o = "Your comment is under moderation.")
            : "flagged" === e.state &&
              (o = "Your comment was flagged as spam and is under moderation."),
            "" !== o && Ne(Se(k + r), co(o));
          var n = Le;
          (void 0 !== n && "anonymous" !== c) || (n = "anonymous");
          var t = {
              commentHex: e.commentHex,
              commenterHex: n,
              markdown: s,
              html: e.html,
              parentHex: "root",
              score: 0,
              state: "approved",
              direction: 0,
              creationDate: new Date(),
            },
            i = so({ root: [t] }, "root");
          (se[e.commentHex] = t),
            "root" !== r
              ? (m.replaceWith(i),
                (be[r] = !1),
                De(l, "option-reply"),
                Ae(l, "option-cancel"),
                (l.title = "Reply to this comment"),
                Ue(l, B.replyShow, r))
              : ((d.value = ""), Ee(Se(h), i)),
            We(a);
        } else Qe(e.message);
      });
    } else De(d, "red-border");
  };
  var lo = {
    "score-desc": function (e, o) {
      return o.score - e.score;
    },
    "creationdate-desc": function (e, o) {
      return e.creationDate < o.creationDate ? 1 : -1;
    },
    "creationdate-asc": function (e, o) {
      return e.creationDate < o.creationDate ? -1 : 1;
    },
  };
  function so(L, M) {
    var e = L[M];
    if (!e || !e.length) return null;
    e.sort(function (e, o) {
      return e.deleted || e.commentHex !== xe
        ? o.deleted || o.commentHex !== xe
          ? lo[Ce](e, o)
          : 1 / 0
        : -1 / 0;
    });
    var S = new Date().getTime(),
      N = Re("div");
    return (
      e.forEach(function (e) {
        var o,
          n,
          t = ue[e.commenterHex],
          i = Re("div"),
          r = Re("div"),
          c = Re("div"),
          a = Re("div"),
          m = Re("div"),
          d = Re("div"),
          l = Re("div"),
          s = Re("div"),
          u = Re("button"),
          p = Re("button"),
          v = Re("button"),
          f = Re("button"),
          h = Re("button"),
          g = Re("button"),
          x = Re("button"),
          b = Re("button"),
          w = so(L, e.commentHex),
          y = Re("div"),
          k = ao(e.commenterHex + "-" + t.name);
        if (
          ((n =
            "undefined" !== t.link &&
            "https://undefined" !== t.link &&
            "" !== t.link
              ? Re("a")
              : Re("div")),
          (i.id = U + e.commentHex),
          (d.id = q + e.commentHex),
          (l.id = j + e.commentHex),
          (c.id = W + e.commentHex),
          (a.id = Y + e.commentHex),
          (m.id = _ + e.commentHex),
          (s.id = F + e.commentHex),
          (u.id = J + e.commentHex),
          (p.id = V + e.commentHex),
          (v.id = X + e.commentHex),
          (f.id = z + e.commentHex),
          (h.id = G + e.commentHex),
          (g.id = $ + e.commentHex),
          (x.id = K + e.commentHex),
          (b.id = Q + e.commentHex),
          w && (w.id = Z + e.commentHex),
          (y.id = ee + e.commentHex),
          (n.id = oe + e.commentHex),
          (v.title = "Collapse children"),
          (f.title = "Upvote"),
          (h.title = "Downvote"),
          (u.title = "Edit"),
          (p.title = "Reply"),
          (g.title = "Approve"),
          (x.title = "Remove"),
          xe === e.commentHex
            ? (b.title = ve ? "Unsticky" : "This comment has been stickied")
            : (b.title = "Sticky"),
          (a.title = e.creationDate.toString()),
          (i.style.borderLeft = "2px solid " + k),
          e.deleted ? (n.innerText = "[deleted]") : (n.innerText = t.name),
          (l.innerHTML = e.html),
          (a.innerText = (function (e, o) {
            var n = 2592e6,
              t = e - o;
            return t < 5e3
              ? "just now"
              : t < 12e4
              ? Math.round(t / 1e3) + " seconds ago"
              : t < 72e5
              ? Math.round(t / 6e4) + " minutes ago"
              : t < 1728e5
              ? Math.round(t / 36e5) + " hours ago"
              : t < 5184e6
              ? Math.round(t / 864e5) + " days ago"
              : t < 62208e6
              ? Math.round(t / n) + " months ago"
              : Math.round(t / 31104e6) + " years ago";
          })(S, e.creationDate)),
          (m.innerText = mo(e.score)),
          (o = Ve(k, "anonymous" === e.commenterHex ? "?" : t.name[0])),
          "undefined" !== t.photo &&
            Xe(o, ce + "/api/commenter/photo?commenterHex=" + t.commenterHex),
          De(i, "card"),
          ve && "approved" !== e.state && De(i, "dark-card"),
          t.isModerator && De(n, "moderator"),
          "flagged" === e.state && De(n, "flagged"),
          De(r, "header"),
          De(n, "name"),
          De(c, "subtitle"),
          De(a, "timeago"),
          De(m, "score"),
          De(d, "body"),
          De(s, "options"),
          Me && De(s, "options-mobile"),
          De(u, "option-button"),
          De(u, "option-edit"),
          De(p, "option-button"),
          De(p, "option-reply"),
          De(v, "option-button"),
          De(v, "option-collapse"),
          De(f, "option-button"),
          De(f, "option-upvote"),
          De(h, "option-button"),
          De(h, "option-downvote"),
          De(g, "option-button"),
          De(g, "option-approve"),
          De(x, "option-button"),
          De(x, "option-remove"),
          De(b, "option-button"),
          xe === e.commentHex
            ? De(b, "option-unsticky")
            : De(b, "option-sticky"),
          de &&
            (0 < e.direction
              ? De(f, "upvoted")
              : e.direction < 0 && De(h, "downvoted")),
          Ue(u, B.editShow, e.commentHex),
          Ue(v, B.commentCollapse, e.commentHex),
          Ue(g, B.commentApprove, e.commentHex),
          Ue(x, B.commentDelete, e.commentHex),
          Ue(b, B.commentSticky, e.commentHex),
          de)
        ) {
          var T = uo(f, h, e.commentHex, e.direction);
          (f = T[0]), (h = T[1]);
        } else Ue(f, B.loginBoxShow, null), Ue(h, B.loginBoxShow, null);
        Ue(p, B.replyShow, e.commentHex),
          "undefined" !== t.link &&
            "https://undefined" !== t.link &&
            "" !== t.link &&
            qe(n, "href", t.link),
          Be(s, v),
          e.deleted || (Be(s, h), Be(s, f)),
          e.commenterHex === Le ? Be(s, u) : e.deleted || Be(s, p),
          !e.deleted && ve && "root" === M && Be(s, b),
          e.deleted || (!ve && e.commenterHex !== Le) || Be(s, x),
          ve && "approved" !== e.state && Be(s, g),
          e.deleted || ve || xe !== e.commentHex || Be(s, b),
          qe(s, "style", "width: " + 32 * (s.childNodes.length + 1) + "px;");
        for (var H = 0; H < s.childNodes.length; H++)
          qe(s.childNodes[H], "style", "right: " + 32 * H + "px;");
        if (
          (Be(c, m),
          Be(c, a),
          Me || Be(r, s),
          Be(r, o),
          Be(r, n),
          Be(r, c),
          Be(d, l),
          Be(y, d),
          Me)
        ) {
          Be(y, s);
          var C = Re("div");
          De(C, "options-clearfix"), Be(y, C);
        }
        w && (De(w, "body"), Be(y, w)),
          Be(i, r),
          Be(i, y),
          (e.deleted && ("true" === E || null === w)) || Be(N, i);
      }),
      0 === N.childNodes.length ? null : N
    );
  }
  function uo(e, o, n, t) {
    return (
      (e = Pe(e)),
      (o = Pe(o)),
      0 < t
        ? (Ue(e, B.vote, [n, [1, 0]]), Ue(o, B.vote, [n, [1, -1]]))
        : t < 0
        ? (Ue(e, B.vote, [n, [-1, 1]]), Ue(o, B.vote, [n, [-1, 0]]))
        : (Ue(e, B.vote, [n, [0, 1]]), Ue(o, B.vote, [n, [0, -1]])),
      [e, o]
    );
  }
  function po(i) {
    var e = Se(b + i),
      r = e.value;
    if ("" !== r) {
      Ae(e, "red-border");
      var o = { commenterToken: _e(), commentHex: i, markdown: r };
      je(re + "/api/comment/edit", o, function (e) {
        if (e.success) {
          Ze(), (se[i].markdown = r), (se[i].html = e.html);
          var o = Se(J + i),
            n = Se(k + i);
          (n.innerHTML = se[i].html),
            (n.id = j + i),
            delete we[i],
            De(o, "option-edit"),
            Ae(o, "option-cancel"),
            (o.title = "Edit comment"),
            Ue((o = Pe(o)), B.editShow, i);
          var t = "";
          "unapproved" === e.state
            ? (t = "Your comment is under moderation.")
            : "flagged" === e.state &&
              (t = "Your comment was flagged as spam and is under moderation."),
            "" !== t && Ne(Se(k + i), co(t));
        } else Qe(e.message);
      });
    } else De(e, "red-border");
  }
  function vo(e) {
    var n = {};
    return (
      e.forEach(function (e) {
        var o = e.parentHex;
        o in n || (n[o] = []),
          (e.creationDate = new Date(e.creationDate)),
          n[o].push(e),
          (se[e.commentHex] = { html: e.html, markdown: e.markdown });
      }),
      n
    );
  }
  function fo() {
    var e = Se(g);
    e.innerHTML = "";
    var o = so(vo(le), "root");
    o && Be(e, o);
  }
  function ho(e) {
    de ? B.commentNew(e, _e()) : B.loginBoxShow(e);
  }
  function go(e) {
    if (pe) ho(e);
    else {
      var o = Se(w + e),
        n = Se(b + e);
      if ("" !== n.value)
        return (
          Ae(n, "red-border"),
          o.checked
            ? void (function (e) {
                (he = !0), B.commentNew(e, "anonymous");
              })(e)
            : void ho(e)
        );
      De(n, "red-border");
    }
  }
  function o(e) {
    (Se(a).innerHTML = ""), (be = {}), B.main(e);
  }
  function xo(e, o, n) {
    je(re + "/api/commenter/login", { email: e, password: o }, function (e) {
      if (!e.success) return B.loginBoxClose(), void Qe(e.message);
      Ze(),
        Ye("commentoCommenterToken", e.commenterToken),
        ze(e.commenter, e.email),
        yo(),
        Oe(Se(d)),
        null !== n
          ? B.commentNew(n, e.commenterToken, function () {
              B.loginBoxClose(), Ke(fo);
            })
          : (B.loginBoxClose(), Ke(fo));
    });
  }
  function bo(o) {
    var e = { isLocked: ge, stickyCommentHex: xe },
      n = {
        commenterToken: _e(),
        domain: parent.location.host,
        path: me,
        attributes: e,
      };
    je(re + "/api/page/update", n, function (e) {
      e.success ? (Ze(), We(o)) : Qe(e.message);
    });
  }
  function wo() {
    void 0 === t ? yo() : $e(t, yo);
  }
  function yo() {
    var e = Se(m),
      o = Se(l),
      n = Se(f);
    qe(e, "style", ""), ve && qe(o, "style", ""), n && qe(n, "style", "");
  }
  function e() {
    for (
      var e = (function (e) {
          return i.getElementsByTagName(e);
        })("script"),
        o = 0;
      o < e.length;
      o++
    )
      if (e[o].src.match(/\/js\/commento\.js$/)) {
        var n = Ie(e[o], "data-page-id");
        void 0 !== n && (me = n),
          (t = Ie(e[o], "data-css-override")),
          (c = Ie(e[o], "data-auto-init")),
          void 0 === (a = Ie(e[o], "data-id-root")) && (a = "commento"),
          (r = Ie(e[o], "data-no-fonts")),
          (E = Ie(e[o], "data-hide-deleted"));
      }
  }
  (B.commentApprove = function (i) {
    var e = { commenterToken: _e(), commentHex: i };
    je(re + "/api/comment/approve", e, function (e) {
      if (e.success) {
        Ze();
        var o = Se(U + i),
          n = Se(oe + i),
          t = Se($ + i);
        Ae(o, "dark-card"), Ae(n, "flagged"), Oe(t);
      } else Qe(e.message);
    });
  }),
    (B.commentDelete = function (o) {
      if (confirm("Are you sure you want to delete this comment?")) {
        var e = { commenterToken: _e(), commentHex: o };
        je(re + "/api/comment/delete", e, function (e) {
          e.success
            ? (Ze(), (Se(j + o).innerText = "[deleted]"))
            : Qe(e.message);
        });
      }
    }),
    (B.vote = function (e) {
      var o = e[0],
        n = e[1][0],
        t = e[1][1],
        i = Se(z + o),
        r = Se(G + o),
        c = Se(_ + o),
        a = { commenterToken: _e(), commentHex: o, direction: t },
        m = uo(i, r, o, t);
      (i = m[0]),
        (r = m[1]),
        Ae(i, "upvoted"),
        Ae(r, "downvoted"),
        0 < t ? De(i, "upvoted") : t < 0 && De(r, "downvoted"),
        (c.innerText = mo(
          parseInt(c.innerText.replace(/[^\d-.]/g, "")) + t - n
        )),
        je(re + "/api/comment/vote", a, function (e) {
          if (!e.success)
            return (
              Qe(e.message),
              Ae(i, "upvoted"),
              Ae(r, "downvoted"),
              (c.innerText = mo(
                parseInt(c.innerText.replace(/[^\d-.]/g, "")) - t + n
              )),
              void uo(i, r, o, n)
            );
          Ze();
        });
    }),
    (B.editShow = function (e) {
      if (!(e in we && we[e])) {
        var o = Se(j + e);
        (we[e] = !0),
          o.replaceWith(no(e, !0)),
          (Se(b + e).value = se[e].markdown);
        var n = Se(J + e);
        Ae(n, "option-edit"),
          De(n, "option-cancel"),
          (n.title = "Cancel edit"),
          Ue((n = Pe(n)), B.editCollapse, e);
      }
    }),
    (B.editCollapse = function (e) {
      var o = Se(J + e),
        n = Se(k + e);
      (n.innerHTML = se[e].html),
        (n.id = j + e),
        delete we[e],
        De(o, "option-edit"),
        Ae(o, "option-cancel"),
        (o.title = "Edit comment"),
        Ue((o = Pe(o)), B.editShow, e);
    }),
    (B.replyShow = function (e) {
      if (!(e in be && be[e])) {
        Ee(Se(j + e), no(e)), (be[e] = !0);
        var o = Se(V + e);
        Ae(o, "option-reply"),
          De(o, "option-cancel"),
          (o.title = "Cancel reply"),
          Ue((o = Pe(o)), B.replyCollapse, e);
      }
    }),
    (B.replyCollapse = function (e) {
      var o = Se(V + e);
      Se(k + e).remove(),
        delete be[e],
        De(o, "option-reply"),
        Ae(o, "option-cancel"),
        (o.title = "Reply to this comment"),
        Ue((o = Pe(o)), B.replyShow, e);
    }),
    (B.commentCollapse = function (e) {
      var o = Se(Z + e),
        n = Se(X + e);
      o && De(o, "hidden"),
        Ae(n, "option-collapse"),
        De(n, "option-uncollapse"),
        (n.title = "Expand children"),
        Ue((n = Pe(n)), B.commentUncollapse, e);
    }),
    (B.commentUncollapse = function (e) {
      var o = Se(Z + e),
        n = Se(X + e);
      o && Ae(o, "hidden"),
        Ae(n, "option-uncollapse"),
        De(n, "option-collapse"),
        (n.title = "Collapse children"),
        Ue((n = Pe(n)), B.commentCollapse, e);
    }),
    (B.commentoAuth = function (e) {
      var n = e.provider,
        t = e.id,
        i = window.open("", "_blank");
      !(function (e, o) {
        var n = new XMLHttpRequest();
        n.open("GET", e, !0),
          (n.onload = function () {
            o(JSON.parse(n.response));
          }),
          n.send(null);
      })(re + "/api/commenter/token/new", function (o) {
        if (o.success) {
          Ze(),
            Ye("commentoCommenterToken", o.commenterToken),
            (i.location =
              re +
              "/api/oauth/" +
              n +
              "/redirect?commenterToken=" +
              o.commenterToken);
          var e = setInterval(function () {
            i.closed &&
              (clearInterval(e),
              Ge(function () {
                var e = Se(f);
                e && qe(e, "style", ""),
                  "anonymous" !== _e() && Oe(Se(d)),
                  null !== t
                    ? B.commentNew(t, o.commenterToken, function () {
                        B.loginBoxClose(), Ke(fo);
                      })
                    : (B.loginBoxClose(), Ke(fo));
              }));
          }, 250);
        } else Qe(o.message);
      });
    }),
    (B.popupRender = function (n) {
      var e = Se(T),
        o = Re("div"),
        t = Re("div"),
        i = Re("div"),
        r = Re("div"),
        c = Re("hr"),
        a = Re("div"),
        m = Re("div"),
        d = Re("div"),
        l = Re("hr"),
        s = Re("div"),
        u = Re("div"),
        p = Re("div"),
        v = Re("input"),
        f = Re("button"),
        h = Re("div"),
        g = Re("a"),
        x = Re("div"),
        b = Re("a"),
        w = Re("div");
      (o.id = H),
        (s.id = C),
        (v.id = L),
        (f.id = M),
        (h.id = S),
        (x.id = N),
        (i.id = A),
        (t.id = D),
        (c.id = R),
        (a.id = O),
        (m.id = I),
        (l.id = P),
        De(e, "login-box-container"),
        De(o, "login-box"),
        De(s, "login-box-subtitle"),
        De(u, "email-container"),
        De(p, "email"),
        De(v, "input"),
        De(f, "email-button"),
        De(h, "forgot-link-container"),
        De(g, "forgot-link"),
        De(x, "login-link-container"),
        De(b, "login-link"),
        De(t, "login-box-subtitle"),
        De(i, "oauth-buttons-container"),
        De(r, "oauth-buttons"),
        De(a, "login-box-subtitle"),
        De(m, "oauth-buttons-container"),
        De(d, "oauth-buttons"),
        De(w, "login-box-close"),
        De(ae, "root-min-height"),
        (g.innerText = "Forgot your password?"),
        (b.innerText = "Don't have an account? Sign up."),
        (s.innerText = "Login with your email address"),
        (f.innerText = "Continue"),
        (a.innerText = "Proceed with social login"),
        (t.innerText =
          "Proceed with " + parent.location.host + " authentication"),
        Ue(f, B.passwordAsk, n),
        Ue(g, B.forgotPassword, n),
        Ue(b, B.popupSwitch, n),
        Ue(w, B.loginBoxClose),
        qe(e, "style", "display: none; opacity: 0;"),
        qe(v, "name", "email"),
        qe(v, "placeholder", "Email address"),
        qe(v, "type", "text");
      var y = 0;
      if (
        (["google", "twitter", "github", "gitlab"].forEach(function (e) {
          if (ye[e]) {
            var o = Re("button");
            De(o, "button"),
              De(o, e + "-button"),
              (o.innerText = e),
              Ue(o, B.commentoAuth, { provider: e, id: n }),
              Be(d, o),
              y++;
          }
        }),
        ye.sso)
      ) {
        var k = Re("button");
        De(k, "button"),
          De(k, "sso-button"),
          (k.innerText = "Single Sign-On"),
          Ue(k, B.commentoAuth, { provider: "sso", id: n }),
          Be(r, k),
          Be(i, r),
          Be(o, t),
          Be(o, i),
          (0 < y || ye.commento) && Be(o, c);
      }
      (He = 0 < y && (Be(o, a), Be(m, d), Be(o, m), !0)),
        Be(p, v),
        Be(p, f),
        Be(u, p),
        Be(h, g),
        Be(x, b),
        0 < y && ye.commento && Be(o, l),
        ye.commento && (Be(o, s), Be(o, u), Be(o, h), Be(o, x)),
        Be(o, w),
        (Te = "login"),
        (e.innerHTML = ""),
        Be(e, o);
    }),
    (B.forgotPassword = function () {
      (window.open("", "_blank").location = re + "/forgot?commenter=true"),
        B.loginBoxClose();
    }),
    (B.popupSwitch = function (e) {
      var o = Se(C);
      He && (Oe(Se(I)), Oe(Se(O)), Oe(Se(R)), Oe(Se(P))),
        ye.sso && (Oe(Se(A)), Oe(Se(D)), Oe(Se(R)), Oe(Se(P))),
        Oe(Se(N)),
        Oe(Se(S)),
        (o.innerText = "Create an account"),
        (Te = "signup"),
        B.passwordAsk(e),
        Se(L).focus();
    }),
    (B.login = function (e) {
      var o = Se(L),
        n = Se(u);
      xo(o.value, n.value, e);
    }),
    (B.signup = function (o) {
      var n = Se(L),
        e = Se(p),
        t = Se(v),
        i = Se(u),
        r = {
          email: n.value,
          name: e.value,
          website: t.value,
          password: i.value,
        };
      je(re + "/api/commenter/new", r, function (e) {
        if (!e.success) return B.loginBoxClose(), void Qe(e.message);
        Ze(), xo(n.value, i.value, o);
      });
    }),
    (B.passwordAsk = function (e) {
      var o,
        n,
        t,
        i,
        r = Se(H),
        c = Se(C);
      Oe(Se(M)),
        Oe(Se(N)),
        Oe(Se(S)),
        He && 0 < ye.length && (Oe(Se(R)), Oe(Se(P)), Oe(Se(O)), Oe(Se(I))),
        (i =
          "signup" === Te
            ? ((o = ["name", "website", "password"]),
              (n = [p, v, u]),
              (t = ["text", "text", "password"]),
              ["Real Name", "Website (Optional)", "Password"])
            : ((o = ["password"]),
              (n = [u]),
              (t = ["password"]),
              ["Password"])),
        (c.innerText =
          "signup" === Te
            ? "Finish the rest of your profile to complete."
            : "Enter your password to log in.");
      for (var a = 0; a < o.length; a++) {
        var m = Re("div"),
          d = Re("div"),
          l = Re("input");
        if (
          ((l.id = n[a]),
          De(m, "email-container"),
          De(d, "email"),
          De(l, "input"),
          qe(l, "name", o[a]),
          qe(l, "type", t[a]),
          qe(l, "placeholder", i[a]),
          Be(d, l),
          Be(m, d),
          "password" === o[a])
        ) {
          var s = Re("button");
          De(s, "email-button"),
            (s.innerText = Te),
            Ue(s, "signup" === Te ? B.signup : B.login, e),
            Be(d, s);
        }
        Be(r, m);
      }
      "signup" === Te ? Se(p).focus() : Se(u).focus();
    }),
    (B.threadLockToggle = function () {
      var e = Se(n);
      (ge = !ge),
        (e.disabled = !0),
        bo(function () {
          (e.disabled = !1), o();
        });
    }),
    (B.commentSticky = function (o) {
      if ("none" !== xe) {
        var e = Se(Q + xe);
        null === e
          ? (xe = "none")
          : (Ae(e, "option-unsticky"), De(e, "option-sticky"));
      }
      (xe = xe === o ? "none" : o),
        bo(function () {
          var e = Se(Q + o);
          xe === o
            ? (Ae(e, "option-sticky"), De(e, "option-unsticky"))
            : (Ae(e, "option-unsticky"), De(e, "option-sticky"));
        });
    }),
    (B.loginBoxClose = function () {
      var e = Se(m),
        o = Se(T);
      Ae(e, "blurred"),
        Ae(ae, "root-min-height"),
        qe(o, "style", "display: none");
    }),
    (B.loginBoxShow = function (e) {
      var o = Se(m),
        n = Se(T);
      B.popupRender(e),
        De(o, "blurred"),
        qe(n, "style", ""),
        (window.location.hash = T),
        Se(L).focus();
    });
  var ko = !(B.main = function (e) {
    if (null !== (ae = Se(a))) {
      null === Me && (Me = ae.getBoundingClientRect().width < 450),
        De(ae, "root"),
        "true" !== r && De(ae, "root-font"),
        (function () {
          var e = Re("div");
          (e.id = T), Be(ae, e);
        })(),
        (function () {
          var e = Re("div");
          (e.id = s),
            De(e, "error-box"),
            qe(e, "style", "display: none;"),
            Be(ae, e);
        })(),
        (function () {
          var e = Re("div");
          (e.id = m),
            De(e, "main-area"),
            qe(e, "style", "display: none"),
            Be(ae, e);
        })();
      var o = (function () {
        var e = Re("div"),
          o = Re("div"),
          n = Re("a"),
          t = Re("span");
        return (
          (e.id = "commento-footer"),
          De(e, "footer"),
          De(o, "logo-container"),
          De(n, "logo"),
          De(t, "logo-text"),
          qe(n, "href", "https://commento.io"),
          qe(n, "target", "_blank"),
          (t.innerText = "Commento"),
          Be(n, t),
          Be(o, n),
          Be(e, o),
          e
        );
      })();
      $e(ce + "/css/commento.css", wo),
        Ge(function () {
          Ke(function () {
            !(function () {
              var e = Re("div"),
                o = Re("button");
              (e.id = l),
                (o.id = n),
                De(e, "mod-tools"),
                (o.innerText = ge ? "Unlock Thread" : "Lock Thread"),
                Ue(o, B.threadLockToggle),
                qe(e, "style", "display: none"),
                Be(e, o),
                Be(ae, e);
            })(),
              ro(function () {
                fo(),
                  Be(ae, o),
                  (function () {
                    if (window.location.hash)
                      if (window.location.hash.startsWith("#commento-")) {
                        var e = Se(U + window.location.hash.split("-")[1]);
                        if (null === e) return;
                        De(e, "highlighted-card"), e.scrollIntoView(!0);
                      } else
                        window.location.hash.startsWith("#commento") &&
                          ae.scrollIntoView(!0);
                  })(),
                  yo(),
                  (function () {
                    for (
                      var e = i.getElementsByClassName("commento-name"), o = 0;
                      o < e.length;
                      o++
                    )
                      qe(
                        e[o],
                        "style",
                        "max-width: " +
                          (e[o].getBoundingClientRect().width + 20) +
                          "px;"
                      );
                  })(),
                  We(e);
              });
          });
        });
    } else
      console.log(
        "[commento] error: no root element with ID '" + a + "' found"
      );
  });
  function To() {
    ko ||
      ((ko = !0),
      e(),
      "true" === c || void 0 === c
        ? B.main(void 0)
        : "false" !== c &&
          console.log(
            "[commento] error: invalid value for data-auto-init; allowed values: true, false"
          ));
  }
  var Ho = function () {
    var e = i.readyState;
    "loading" === e
      ? i.addEventListener("readystatechange", Ho)
      : "interactive" === e
      ? To()
      : "complete" === e && To();
  };
  Ho();
})(window.commento, document);
