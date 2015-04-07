<?php

function distance($a, $b)
{
    $aLength = strlen($a);
    if ($aLength != strlen($b)) {
        throw new InvalidArgumentException('DNA strands must be of equal length.');
    }
    $count = 0;
    for ($i = 0; $i < $aLength; $i++) {
        if ($a[$i] !== $b[$i]) {
            $count++;
        }
    }
    return $count;
}
