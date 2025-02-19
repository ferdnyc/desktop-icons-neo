/* DING: Desktop Icons New Generation for GNOME Shell
 *
 * Copyright (C) 2019 Sergio Costas (rastersoft@gmail.com)
 * Based on code original (C) Carlos Soriano
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const Gtk = imports.gi.Gtk;
const Pango = imports.gi.Pango;
const Gettext = imports.gettext.domain('desktopicons-neo');

const _ = Gettext.gettext;

var AskConfirmPopup = class {

    constructor(text, secondaryText, parentWindow) {

        this._window = new Gtk.MessageDialog({window_position: Gtk.WindowPosition.CENTER_ON_PARENT,
                                              transient_for: parentWindow,
                                              message_type: Gtk.MessageType.WARNING,
                                              buttons: Gtk.ButtonsType.NONE,
                                              text: text,
                                              secondary_text: secondaryText});
        this._window.add_button(_("Cancel"), Gtk.ResponseType.CANCEL);
        let deleteButton = this._window.add_button(_("Delete"), Gtk.ResponseType.OK);
        deleteButton.get_style_context().add_class("destructive-action");
    }

    run() {
        this._window.show_all();
        let retval = this._window.run();
        this._window.hide();
        if (retval == Gtk.ResponseType.OK) {
            return true;
        } else {
            return false;
        }
    }
};
