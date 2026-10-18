import decky


class Plugin:
    async def _main(self):
        decky.logger.info("NieR UI : backend démarré")

    async def _unload(self):
        decky.logger.info("NieR UI : backend arrêté")
