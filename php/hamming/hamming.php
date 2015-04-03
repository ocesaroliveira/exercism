<?php

function distance($a, $b)
{
    if (strlength($a) != strlength($b)) {
        throw new InvalidArgumentException('DNA strands must be of equal length.');
    }
    return count(array_diff_assoc(str_split($a), str_split($b)));
}
