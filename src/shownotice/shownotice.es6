import $ from 'jquery';
import windows from 'windows/windows';

let win = null;

export const init = () => {
    const msg = $("<div style='padding:10px'/>").append($("<span/>", {
        html: "Please send the following documents to %1 in order to verify your identity and authenticate your account:"
            .i18n().replace("%1", "<a href=\"mailto:support@champion-fx.com\">support@champion-fx.com</a>")
    }).append( $("<ul class=\"checked\">").append(
            $("<li>", { html: "Proof of identity – A scanned copy of your passport, driving license (either provisional or full), or identity card that shows your full name and date of birth.".i18n() }),
            $("<li>", { html: "Proof of address – A scanned copy of a utility bill or bank statement that’s not more than three months old.".i18n() })
        )).append(
            $('<p>',{html:'Got questions? <a href=\'https://www.binary.com/en/contact.html\'>Contact us</a> for help.'})
        ));
    if (win) {
        win.moveToTop();
        return;
    }

    win = windows.createBlankWindow($("<div/>").append(msg).i18n(), {
        title: "Authentication".i18n(),
        dialogClass: "dialog-message",
        width: 700,
        height: 'auto',
        resizable: false,
        collapsable: false,
        minimizable: false,
        maximizable: false,
        closable: true,
        closeOnEscape: false,
        modal: true,
        ignoreTileAction: true,
        "data-authorized": "true",
        close: () => {
            win.dialog('destroy');
            win = null;
        }
    });
    win.dialog("open");
}

export default {
    init
}
