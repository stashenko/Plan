package main.java.com.djrapitops.plan.data.listeners;

import main.java.com.djrapitops.plan.Plan;
import main.java.com.djrapitops.plan.data.cache.DataCacheHandler;
import main.java.com.djrapitops.plan.data.handling.info.ChatInfo;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.event.player.AsyncPlayerChatEvent;

/**
 * Event Listener for AsyncPlayerChatEvents.
 *
 * @author Rsl1122
 */
public class PlanChatListener implements Listener {

    private final DataCacheHandler handler;

    /**
     * Class Constructor.
     *
     * @param plugin Current instance of Plan
     */
    public PlanChatListener(Plan plugin) {
        handler = plugin.getHandler();
    }

    /**
     * ChatEvent listener.
     *
     * @param event Fired Event
     */
    @EventHandler(priority = EventPriority.MONITOR)
    public void onChat(AsyncPlayerChatEvent event) {
        if (event.isCancelled()) {
            return;
        }

        Player p = event.getPlayer();
        handler.addToPool(new ChatInfo(p.getUniqueId(), p.getDisplayName()));
    }
}
