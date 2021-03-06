'use strict';

/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
function hapticSelection() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
}
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
function hapticSelectionStart() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
}
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
function hapticSelectionChanged() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
}
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
function hapticSelectionEnd() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
}

exports.hapticSelection = hapticSelection;
exports.hapticSelectionChanged = hapticSelectionChanged;
exports.hapticSelectionEnd = hapticSelectionEnd;
exports.hapticSelectionStart = hapticSelectionStart;
