<?php
    header("Access-Control-Allow-Origin: *");

    $guestCount = empty($_GET['guests']) ? 0 : $_GET['guests'];
    $recPass = $_GET['rec'];
    $deckPass = $_GET['deck'];

    $total = $guestCount * 5000 + $recPass + $deckPass;

    echo "Total: $", number_format($total, 2);
?>